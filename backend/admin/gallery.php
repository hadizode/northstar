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

        if ($title === '') {
            $error = 'عنوان الزامی است.';
        } elseif (empty($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
            $error = 'انتخاب تصویر الزامی است.';
        } else {
            try {
                $filename = handle_image_upload($_FILES['image'], MEDIA_UPLOAD_DIR);
                $maxSort = (int) db()->query('SELECT COALESCE(MAX(sort_order),0) FROM gallery')->fetchColumn();
                db()->prepare('INSERT INTO gallery (title, description, image, sort_order) VALUES (:t,:d,:i,:s)')
                    ->execute(['t' => $title, 'd' => $desc, 'i' => $filename, 's' => $maxSort + 1]);
                $message = 'آیتم گالری اضافه شد.';
            } catch (Throwable $ex) {
                $error = $ex->getMessage();
            }
        }
    } elseif ($action === 'delete') {
        $id = (int) ($_POST['id'] ?? 0);
        $row = db()->prepare('SELECT image FROM gallery WHERE id = :id');
        $row->execute(['id' => $id]);
        if ($img = $row->fetchColumn()) {
            $path = rtrim(MEDIA_UPLOAD_DIR, '/') . '/' . basename($img);
            if (is_file($path)) @unlink($path);
        }
        db()->prepare('DELETE FROM gallery WHERE id = :id')->execute(['id' => $id]);
        $message = 'حذف شد.';
    } elseif ($action === 'edit') {
        $id = (int) ($_POST['id'] ?? 0);
        $title = clean_str($_POST['title'] ?? '');
        $desc  = clean_str($_POST['description'] ?? '');
        if ($title === '') {
            $error = 'عنوان الزامی است.';
        } else {
            $image = null;
            if (!empty($_FILES['image']['name'])) {
                try {
                    $image = handle_image_upload($_FILES['image'], MEDIA_UPLOAD_DIR);
                } catch (Throwable $ex) {
                    $error = $ex->getMessage();
                }
            }
            if (!$error) {
                if ($image) {
                    $oldRow = db()->prepare('SELECT image FROM gallery WHERE id = :id');
                    $oldRow->execute(['id' => $id]);
                    $oldImg = $oldRow->fetchColumn();
                    if ($oldImg) {
                        $oldPath = rtrim(MEDIA_UPLOAD_DIR, '/') . '/' . basename($oldImg);
                        if (is_file($oldPath)) @unlink($oldPath);
                    }
                    db()->prepare('UPDATE gallery SET title=:t, description=:d, image=:i WHERE id=:id')
                        ->execute(['t'=>$title, 'd'=>$desc, 'i'=>$image, 'id'=>$id]);
                } else {
                    db()->prepare('UPDATE gallery SET title=:t, description=:d WHERE id=:id')
                        ->execute(['t'=>$title, 'd'=>$desc, 'id'=>$id]);
                }
                $message = 'آیتم گالری ویرایش شد.';
            }
        }
    } elseif ($action === 'toggle') {
        db()->prepare('UPDATE gallery SET is_active = 1 - is_active WHERE id = :id')
            ->execute(['id' => (int) ($_POST['id'] ?? 0)]);
        $message = 'وضعیت به‌روزرسانی شد.';
    } elseif ($action === 'reorder') {
        $ids = json_decode($_POST['order'] ?? '[]', true) ?: [];
        $stmt = db()->prepare('UPDATE gallery SET sort_order = :s WHERE id = :id');
        foreach ($ids as $i => $id) $stmt->execute(['s' => $i, 'id' => (int) $id]);
        json_response(['ok' => true]);
    }
}

$items = db()->query('SELECT * FROM gallery ORDER BY sort_order, created_at DESC')->fetchAll();

admin_head('گالری');
admin_nav('gallery');
?>
<div class="topbar"><h2>گالری (<?= count($items) ?>)</h2></div>
<?php if ($message): ?><div class="alert ok"><?= e($message) ?></div><?php endif; ?>
<?php if ($error): ?><div class="alert error"><?= e($error) ?></div><?php endif; ?>

<div class="panel" style="margin-bottom:24px;">
  <h3 style="margin-top:0;">افزودن آیتم جدید</h3>
  <form method="post" enctype="multipart/form-data">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="add">
    <div class="field"><label>عنوان</label><input type="text" name="title" required></div>
    <div class="field"><label>توضیحات</label><textarea name="description" rows="3"></textarea></div>
    <div class="field"><label>تصویر (jpg, png, webp - حداکثر ۵ مگابایت)</label><input type="file" name="image" accept=".jpg,.jpeg,.png,.webp" required></div>
    <button class="btn" type="submit">افزودن به گالری</button>
  </form>
</div>

<div class="panel">
  <h3 style="margin-top:0;">آیتم‌های گالری (قابل جابجایی)</h3>
  <ul class="sortable-list" id="galleryList">
    <?php foreach ($items as $item): ?>
      <li data-id="<?= (int) $item['id'] ?>" class="sortable-item">
        <span class="material-symbols-outlined drag-handle">drag_indicator</span>
        <img class="thumb" src="<?= e(MEDIA_UPLOAD_URL . $item['image']) ?>" alt="<?= e($item['title']) ?>">
        <b><?= e($item['title']) ?></b>
        <span class="muted"><?= e($item['description'] ?? '') ?></span>
        <span class="spacer"></span>
        <button class="btn ghost btn-edit-gallery" data-id="<?= (int) $item['id'] ?>" data-title="<?= e($item['title']) ?>" data-desc="<?= e($item['description'] ?? '') ?>">ویرایش</button>
        <form method="post" style="display:inline;">
          <?= csrf_field() ?><input type="hidden" name="action" value="toggle"><input type="hidden" name="id" value="<?= (int) $item['id'] ?>">
          <button class="btn ghost" type="submit"><?= $item['is_active'] ? 'غیرفعال کردن' : 'فعال کردن' ?></button>
        </form>
        <form method="post" style="display:inline;" onsubmit="return confirm('این آیتم حذف شود؟');">
          <?= csrf_field() ?><input type="hidden" name="action" value="delete"><input type="hidden" name="id" value="<?= (int) $item['id'] ?>">
          <button class="btn danger" type="submit">حذف</button>
        </form>
      </li>
    <?php endforeach; ?>
  </ul>
</div>

<div class="panel" id="editGalleryPanel" style="display:none; margin-bottom:20px;">
  <h3 style="margin-top:0;">ویرایش آیتم گالری</h3>
  <form method="post" enctype="multipart/form-data">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="edit">
    <input type="hidden" name="id" id="editGalleryId">
    <div class="field"><label>عنوان</label><input type="text" name="title" id="editGalleryTitle" required></div>
    <div class="field"><label>توضیحات</label><textarea name="description" id="editGalleryDesc" rows="3"></textarea></div>
    <div class="field"><label>تصویر جدید (اختیاری)</label><input type="file" name="image" accept=".jpg,.jpeg,.png,.webp"></div>
    <div style="display:flex; gap:8px; margin-top:10px;">
      <button class="btn" type="submit" style="flex:1;">ذخیره تغییرات</button>
      <button class="btn ghost" type="button" onclick="document.getElementById('editGalleryPanel').style.display='none'" style="flex:1;">انصراف</button>
    </div>
  </form>
</div>

<script src="assets/js/admin.js"></script>
<script>
const csrfToken = <?= json_encode(csrf_token()) ?>;
initSortable('galleryList', 'gallery.php', csrfToken);

document.querySelectorAll('.btn-edit-gallery').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('editGalleryId').value = btn.dataset.id;
    document.getElementById('editGalleryTitle').value = btn.dataset.title;
    document.getElementById('editGalleryDesc').value = btn.dataset.desc || '';
    document.getElementById('editGalleryPanel').style.display = 'block';
    document.getElementById('editGalleryPanel').scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
<?php admin_foot(); ?>
