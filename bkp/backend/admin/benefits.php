<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/partials.php';

$message = '';
$error   = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    if (!csrf_verify($_POST['csrf_token'] ?? null)) {
        $error = 'درخواست نامعتبر است.';
    } elseif ($action === 'add') {
        $title = clean_str($_POST['title'] ?? '');
        $desc  = clean_str($_POST['description'] ?? '');
        $icon  = clean_str($_POST['icon_name'] ?? 'star');
        if ($title === '' || $desc === '') {
            $error = 'عنوان و توضیحات الزامی است.';
        } else {
            $maxSort = (int) db()->query('SELECT COALESCE(MAX(sort_order),0) FROM benefits')->fetchColumn();
            db()->prepare('INSERT INTO benefits (title, description, icon_name, sort_order) VALUES (:t,:d,:i,:s)')
                ->execute(['t' => $title, 'd' => $desc, 'i' => $icon ?: 'star', 's' => $maxSort + 1]);
            $message = 'مورد جدید اضافه شد.';
        }
    } elseif ($action === 'delete') {
        db()->prepare('DELETE FROM benefits WHERE id = :id')->execute(['id' => (int) ($_POST['id'] ?? 0)]);
        $message = 'حذف شد.';
    } elseif ($action === 'edit') {
        $id = (int) ($_POST['id'] ?? 0);
        $title = clean_str($_POST['title'] ?? '');
        $desc  = clean_str($_POST['description'] ?? '');
        $icon  = clean_str($_POST['icon_name'] ?? 'star');
        if ($title === '' || $desc === '') {
            $error = 'عنوان و توضیحات الزامی است.';
        } else {
            db()->prepare('UPDATE benefits SET title=:t, description=:d, icon_name=:i WHERE id=:id')
                ->execute(['t'=>$title, 'd'=>$desc, 'i'=>$icon?:'star', 'id'=>$id]);
            $message = 'مزیت ویرایش شد.';
        }
    } elseif ($action === 'toggle') {
        db()->prepare('UPDATE benefits SET is_active = 1 - is_active WHERE id = :id')
            ->execute(['id' => (int) ($_POST['id'] ?? 0)]);
        $message = 'وضعیت به‌روزرسانی شد.';
    } elseif ($action === 'reorder') {
        $ids = json_decode($_POST['order'] ?? '[]', true) ?: [];
        $stmt = db()->prepare('UPDATE benefits SET sort_order = :s WHERE id = :id');
        foreach ($ids as $i => $id) $stmt->execute(['s' => $i, 'id' => (int) $id]);
        json_response(['ok' => true]);
    }
}

$items = db()->query('SELECT * FROM benefits ORDER BY sort_order')->fetchAll();

admin_head('مزایا');
admin_nav('benefits');
?>
<div class="topbar"><h2>مزایا (کارت‌های بخش "چرا NorthStarWin؟")</h2></div>
<?php if ($message): ?><div class="alert ok"><?= e($message) ?></div><?php endif; ?>
<?php if ($error): ?><div class="alert error"><?= e($error) ?></div><?php endif; ?>

<div class="panel" style="margin-bottom:20px;">
  <h3 style="margin-top:0;">افزودن مزیت جدید</h3>
  <form method="post" style="display:flex; gap:10px; flex-wrap:wrap; align-items:flex-end;">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="add">
    <div class="field" style="flex:1; min-width:160px;"><label>عنوان</label><input type="text" name="title" required></div>
    <div class="field" style="flex:2; min-width:220px;"><label>توضیحات</label><input type="text" name="description" required></div>
    <div class="field" style="flex:1; min-width:160px;"><label>آیکون (Material Symbols)</label><input type="text" name="icon_name" placeholder="مثلاً security"></div>
    <button class="btn" type="submit">افزودن</button>
  </form>
</div>

<div class="panel">
  <h3 style="margin-top:0;">لیست مزایا (قابل جابجایی)</h3>
  <ul class="sortable-list" id="benefitsList">
    <?php foreach ($items as $item): ?>
      <li data-id="<?= (int) $item['id'] ?>" class="sortable-item">
        <span class="material-symbols-outlined drag-handle">drag_indicator</span>
        <span class="material-symbols-outlined"><?= e($item['icon_name']) ?></span>
        <b><?= e($item['title']) ?></b>
        <span class="muted"><?= e($item['description']) ?></span>
        <span class="spacer"></span>
        <button class="btn ghost btn-edit-benefit" data-id="<?= (int) $item['id'] ?>" data-title="<?= e($item['title']) ?>" data-desc="<?= e($item['description']) ?>" data-icon="<?= e($item['icon_name']) ?>">ویرایش</button>
        <form method="post" style="display:inline;">
          <?= csrf_field() ?><input type="hidden" name="action" value="toggle"><input type="hidden" name="id" value="<?= (int) $item['id'] ?>">
          <button class="btn ghost" type="submit"><?= $item['is_active'] ? 'غیرفعال کردن' : 'فعال کردن' ?></button>
        </form>
        <form method="post" style="display:inline;" onsubmit="return confirm('حذف شود؟');">
          <?= csrf_field() ?><input type="hidden" name="action" value="delete"><input type="hidden" name="id" value="<?= (int) $item['id'] ?>">
          <button class="btn danger" type="submit">حذف</button>
        </form>
      </li>
    <?php endforeach; ?>
  </ul>
</div>

<div class="panel" id="editBenefitPanel" style="display:none; margin-bottom:20px;">
  <h3 style="margin-top:0;">ویرایش مزیت</h3>
  <form method="post" style="display:flex; gap:10px; flex-wrap:wrap; align-items:flex-end;">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="edit">
    <input type="hidden" name="id" id="editBenefitId">
    <div class="field" style="flex:1; min-width:160px;"><label>عنوان</label><input type="text" name="title" id="editBenefitTitle" required></div>
    <div class="field" style="flex:2; min-width:220px;"><label>توضیحات</label><input type="text" name="description" id="editBenefitDesc" required></div>
    <div class="field" style="flex:1; min-width:160px;"><label>آیکون (Material Symbols)</label><input type="text" name="icon_name" id="editBenefitIcon" placeholder="مثلاً security"></div>
    <div style="display:flex; gap:8px; width:100%; margin-top:8px;">
      <button class="btn" type="submit" style="flex:1;">ذخیره تغییرات</button>
      <button class="btn ghost" type="button" onclick="document.getElementById('editBenefitPanel').style.display='none'" style="flex:1;">انصراف</button>
    </div>
  </form>
</div>

<script src="assets/js/admin.js"></script>
<script>
const csrfToken = <?= json_encode(csrf_token()) ?>;
initSortable('benefitsList', 'benefits.php', csrfToken);

document.querySelectorAll('.btn-edit-benefit').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('editBenefitId').value = btn.dataset.id;
    document.getElementById('editBenefitTitle').value = btn.dataset.title;
    document.getElementById('editBenefitDesc').value = btn.dataset.desc || '';
    document.getElementById('editBenefitIcon').value = btn.dataset.icon || 'star';
    document.getElementById('editBenefitPanel').style.display = 'block';
    document.getElementById('editBenefitPanel').scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
<?php admin_foot(); ?>
