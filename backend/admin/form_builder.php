<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/partials.php';

$message = '';
$error   = '';

/** "value|Label|icon" per line -> JSON options array (icon optional). */
function parse_options_text(string $text): ?string
{
    $lines = array_filter(array_map('trim', explode("\n", $text)));
    if (!$lines) return null;
    $out = [];
    foreach ($lines as $line) {
        $parts = array_map('trim', explode('|', $line));
        if (count($parts) < 2) continue;
        $item = ['value' => $parts[0], 'label' => $parts[1]];
        if (!empty($parts[2])) $item['icon'] = $parts[2];
        $out[] = $item;
    }
    return $out ? json_encode($out, JSON_UNESCAPED_UNICODE) : null;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    if (!csrf_verify($_POST['csrf_token'] ?? null)) {
        $error = 'درخواست نامعتبر است.';
    } elseif ($action === 'add_step') {
        $title = clean_str($_POST['title'] ?? '');
        if ($title === '') {
            $error = 'عنوان گام الزامی است.';
        } else {
            $maxSort = (int) db()->query('SELECT COALESCE(MAX(sort_order),0) FROM form_steps')->fetchColumn();
            db()->prepare('INSERT INTO form_steps (title, sort_order) VALUES (:t,:s)')
                ->execute(['t' => $title, 's' => $maxSort + 1]);
            $message = 'گام جدید اضافه شد.';
        }
    } elseif ($action === 'delete_step') {
        db()->prepare('DELETE FROM form_steps WHERE id = :id')->execute(['id' => (int) ($_POST['id'] ?? 0)]);
        $message = 'گام و همه فیلدهای آن حذف شدند.';
    } elseif ($action === 'add_field') {
        $stepId = (int) ($_POST['step_id'] ?? 0);
        $key    = preg_replace('/[^a-zA-Z0-9_]/', '_', clean_str($_POST['field_key'] ?? ''));
        $label  = clean_str($_POST['label'] ?? '');
        $type   = clean_str($_POST['type'] ?? 'text');
        $icon   = clean_str($_POST['icon_name'] ?? '');
        $placeholder = clean_str($_POST['placeholder'] ?? '');
        $required = isset($_POST['is_required']) ? 1 : 0;
        $options  = parse_options_text($_POST['options_text'] ?? '');
        $dependsOn = clean_str($_POST['depends_on'] ?? '');
        $dependsValue = clean_str($_POST['depends_value'] ?? '');
        $allowedTypes = ['text','tel','number','textarea','select','segmented','file'];

        if ($key === '' || $label === '' || !$stepId || !in_array($type, $allowedTypes, true)) {
            $error = 'همه فیلدهای الزامی را تکمیل کنید.';
        } else {
            try {
                $stmtSort = db()->prepare('SELECT COALESCE(MAX(sort_order),0) FROM form_fields WHERE step_id = :s');
                $stmtSort->execute(['s' => $stepId]);
                $maxSort = (int) $stmtSort->fetchColumn();

                db()->prepare('INSERT INTO form_fields (step_id, field_key, label, type, icon_name, options, placeholder, is_required, sort_order, depends_on, depends_value)
                                VALUES (:step,:key,:label,:type,:icon,:opts,:ph,:req,:sort,:dep,:depv)')
                    ->execute([
                        'step' => $stepId, 'key' => $key, 'label' => $label, 'type' => $type,
                        'icon' => $icon ?: null, 'opts' => $options, 'ph' => $placeholder ?: null,
                        'req' => $required, 'sort' => $maxSort + 1,
                        'dep' => $dependsOn ?: null, 'depv' => $dependsValue ?: null,
                    ]);
                $message = 'فیلد جدید اضافه شد.';
            } catch (PDOException $ex) {
                $error = str_contains($ex->getMessage(), 'uniq_field_key')
                    ? 'این کلید فیلد قبلا استفاده شده؛ کلید دیگری انتخاب کنید.'
                    : 'خطا در ذخیره فیلد.';
            }
        }
    } elseif ($action === 'delete_field') {
        db()->prepare('DELETE FROM form_fields WHERE id = :id')->execute(['id' => (int) ($_POST['id'] ?? 0)]);
        $message = 'فیلد حذف شد.';
    } elseif ($action === 'toggle_field') {
        db()->prepare('UPDATE form_fields SET is_active = 1 - is_active WHERE id = :id')
            ->execute(['id' => (int) ($_POST['id'] ?? 0)]);
        $message = 'وضعیت فیلد به‌روزرسانی شد.';
    } elseif ($action === 'edit_field') {
        $id = (int) ($_POST['id'] ?? 0);
        $stepId = (int) ($_POST['step_id'] ?? 0);
        $key    = preg_replace('/[^a-zA-Z0-9_]/', '_', clean_str($_POST['field_key'] ?? ''));
        $label  = clean_str($_POST['label'] ?? '');
        $type   = clean_str($_POST['type'] ?? 'text');
        $icon   = clean_str($_POST['icon_name'] ?? '');
        $placeholder = clean_str($_POST['placeholder'] ?? '');
        $required = isset($_POST['is_required']) ? 1 : 0;
        $options  = parse_options_text($_POST['options_text'] ?? '');
        $allowedTypes = ['text','tel','number','textarea','select','segmented','file'];
        if ($key === '' || $label === '' || !$stepId || !in_array($type, $allowedTypes, true)) {
            $error = 'همه فیلدهای الزامی را تکمیل کنید.';
        } else {
            try {
                // Check if depends_on/depends_value columns exist
                $cols = db()->query('SHOW COLUMNS FROM form_fields LIKE "depends_on"')->fetch();
                $hasDepends = !empty($cols);
                
                if ($hasDepends) {
                    $dependsOn = clean_str($_POST['depends_on'] ?? '');
                    $dependsValue = clean_str($_POST['depends_value'] ?? '');
                    db()->prepare('UPDATE form_fields SET step_id=:step, field_key=:key, label=:label, type=:type, icon_name=:icon, options=:opts, placeholder=:ph, is_required=:req, depends_on=:dep, depends_value=:depv WHERE id=:id')
                        ->execute([
                            'step'=>$stepId, 'key'=>$key, 'label'=>$label, 'type'=>$type,
                            'icon'=>$icon?:null, 'opts'=>$options, 'ph'=>$placeholder?:null,
                            'req'=>$required, 'dep'=>$dependsOn?:null, 'depv'=>$dependsValue?:null, 'id'=>$id
                        ]);
                } else {
                    db()->prepare('UPDATE form_fields SET step_id=:step, field_key=:key, label=:label, type=:type, icon_name=:icon, options=:opts, placeholder=:ph, is_required=:req WHERE id=:id')
                        ->execute([
                            'step'=>$stepId, 'key'=>$key, 'label'=>$label, 'type'=>$type,
                            'icon'=>$icon?:null, 'opts'=>$options, 'ph'=>$placeholder?:null,
                            'req'=>$required, 'id'=>$id
                        ]);
                }
                $message = 'فیلد ویرایش شد.';
            } catch (PDOException $ex) {
                error_log('Edit field error: ' . $ex->getMessage());
                $error = str_contains($ex->getMessage(), 'uniq_field_key')
                    ? 'این کلید فیلد قبلا استفاده شده؛ کلید دیگری انتخاب کنید.'
                    : 'خطا در ذخیره فیلد: ' . $ex->getMessage();
            }
        }
    } elseif ($action === 'reorder_fields') {
        $ids = json_decode($_POST['order'] ?? '[]', true) ?: [];
        $stmt = db()->prepare('UPDATE form_fields SET sort_order = :s WHERE id = :id');
        foreach ($ids as $i => $id) $stmt->execute(['s' => $i, 'id' => (int) $id]);
        json_response(['ok' => true]);
    }
}

$steps = db()->query('SELECT * FROM form_steps ORDER BY sort_order')->fetchAll();
$fieldsByStep = [];
foreach (db()->query('SELECT * FROM form_fields ORDER BY step_id, sort_order')->fetchAll() as $f) {
    $fieldsByStep[$f['step_id']][] = $f;
}

$typeLabels = [
    'text' => 'متن کوتاه', 'tel' => 'شماره تلفن', 'number' => 'عدد',
    'textarea' => 'متن بلند', 'select' => 'لیست کشویی', 'segmented' => 'کارت انتخابی', 'file' => 'آپلود فایل',
];

admin_head('فرم سفارش');
admin_nav('form');
?>
<div class="topbar"><h2>سازنده فرم سفارش</h2></div>
<?php if ($message): ?><div class="alert ok"><?= e($message) ?></div><?php endif; ?>
<?php if ($error): ?><div class="alert error"><?= e($error) ?></div><?php endif; ?>

<div class="panel" style="margin-bottom:20px;">
  <h3 style="margin-top:0;">افزودن گام جدید</h3>
  <form method="post" style="display:flex; gap:10px;">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="add_step">
    <input type="text" name="title" placeholder="عنوان گام (مثلاً اطلاعات تماس)" required style="flex:1;">
    <button class="btn" type="submit">افزودن گام</button>
  </form>
</div>

<?php foreach ($steps as $step): ?>
  <div class="panel" style="margin-bottom:20px;">
    <div class="toolbar">
      <h3 style="margin:0;">گام <?= (int) $step['sort_order'] ?>: <?= e($step['title']) ?></h3>
      <form method="post" onsubmit="return confirm('این گام و تمام فیلدهای آن حذف شوند؟');">
        <?= csrf_field() ?><input type="hidden" name="action" value="delete_step"><input type="hidden" name="id" value="<?= (int) $step['id'] ?>">
        <button class="btn danger" type="submit">حذف گام</button>
      </form>
    </div>

    <ul class="sortable-list" id="fields-<?= (int) $step['id'] ?>">
      <?php foreach ($fieldsByStep[$step['id']] ?? [] as $f): ?>
        <li data-id="<?= (int) $f['id'] ?>" class="sortable-item">
          <span class="material-symbols-outlined drag-handle">drag_indicator</span>
          <?php if ($f['icon_name']): ?><span class="material-symbols-outlined"><?= e($f['icon_name']) ?></span><?php endif; ?>
          <b><?= e($f['label']) ?></b>
          <span class="muted">[<?= e($f['field_key']) ?>] · <?= e($typeLabels[$f['type']] ?? $f['type']) ?><?= $f['is_required'] ? ' · الزامی' : '' ?>
            <?php if (!empty($f['depends_on'])): ?> · شرط: <code style="background:#f0f0f0; padding:2px 6px; border-radius:3px; font-size:11px;"><?= e($f['depends_on']) ?> = <?= e($f['depends_value'] ?? '*') ?></code><?php endif; ?>
          </span>
          <span class="spacer"></span>
          <button class="btn ghost btn-edit-field" data-id="<?= (int) $f['id'] ?>" data-step="<?= (int) $step['id'] ?>" data-key="<?= e($f['field_key']) ?>" data-label="<?= e($f['label']) ?>" data-type="<?= e($f['type']) ?>" data-icon="<?= e($f['icon_name'] ?? '') ?>" data-placeholder="<?= e($f['placeholder'] ?? '') ?>" data-required="<?= (int) $f['is_required'] ?>" data-depends="<?= e($f['depends_on'] ?? '') ?>" data-depends-value="<?= e($f['depends_value'] ?? '') ?>" data-options='<?= htmlspecialchars($f['options'] ?? '[]', ENT_QUOTES, 'UTF-8') ?>'>ویرایش</button>
          <form method="post" style="display:inline;">
            <?= csrf_field() ?><input type="hidden" name="action" value="toggle_field">
            <input type="hidden" name="id" value="<?= (int) $f['id'] ?>">
            <button class="btn ghost" type="submit"><?= $f['is_active'] ? 'غیرفعال' : 'فعال' ?></button>
          </form>
          <form method="post" style="display:inline;" onsubmit="return confirm('فیلد حذف شود؟');">
            <?= csrf_field() ?><input type="hidden" name="action" value="delete_field"><input type="hidden" name="id" value="<?= (int) $f['id'] ?>">
            <button class="btn danger" type="submit">حذف</button>
          </form>
        </li>
      <?php endforeach; ?>
    </ul>

    <div class="panel" id="editFieldPanel-<?= (int) $step['id'] ?>" style="display:none; margin-top:14px; background:#f9fafc; padding:15px; border-radius:8px;">
      <h4 style="margin:0 0 12px 0;">ویرایش فیلد</h4>
      <form method="post" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:10px;">
        <?= csrf_field() ?>
        <input type="hidden" name="action" value="edit_field">
        <input type="hidden" name="id" class="edit-field-id">
        <input type="hidden" name="step_id" class="edit-field-step">
        <div class="field"><label>کلید فیلد (انگلیسی، یکتا)</label><input type="text" name="field_key" class="edit-field-key" required placeholder="e.g. company_name"></div>
        <div class="field"><label>برچسب نمایشی</label><input type="text" name="label" class="edit-field-label" required></div>
        <div class="field">
          <label>نوع فیلد</label>
          <select name="type" class="edit-field-type">
            <?php foreach ($typeLabels as $val => $lbl): ?>
              <option value="<?= e($val) ?>"><?= e($lbl) ?></option>
            <?php endforeach; ?>
          </select>
        </div>
        <div class="field"><label>آیکون (اختیاری)</label><input type="text" name="icon_name" class="edit-field-icon" placeholder="مثلاً home"></div>
        <div class="field"><label>Placeholder (اختیاری)</label><input type="text" name="placeholder" class="edit-field-placeholder"></div>
        <div class="field" style="align-self:end;"><label><input type="checkbox" name="is_required" class="edit-field-required" style="width:auto;"> الزامی باشد</label></div>
        <div class="field">
          <label>وابسته به فیلد (اختیاری)</label>
          <select name="depends_on" class="edit-field-depends">
            <option value="">-- بدون وابستگی --</option>
            <?php foreach ($fieldsByStep[$step['id']] ?? [] as $existingField): ?>
              <option value="<?= e($existingField['field_key']) ?>"><?= e($existingField['label']) ?> [<?= e($existingField['field_key']) ?>]</option>
            <?php endforeach; ?>
          </select>
        </div>
        <div class="field">
          <label>مقدار شرط (اختیاری)</label>
          <input type="text" name="depends_value" class="edit-field-depends-value" placeholder="مثلاً sliding یا sliding,casement">
          <small style="display:block; font-size:11px; color:#666; margin-top:4px;">برای چند مقدار، با کاما جدا کنید</small>
        </div>
        <div class="field" style="grid-column:1/-1;">
          <label>گزینه‌ها (فقط برای «لیست کشویی» / «کارت انتخابی») — هر خط: مقدار|برچسب|آیکون(اختیاری)</label>
          <textarea name="options_text" class="edit-field-options" rows="3" placeholder="sliding|پنجره کشویی|window"></textarea>
        </div>
        <div class="field" style="grid-column:1/-1; display:flex; gap:8px;">
          <button class="btn" type="submit" style="flex:1;">ذخیره تغییرات</button>
          <button class="btn ghost" type="button" onclick="document.getElementById('editFieldPanel-<?= (int) $step['id'] ?>').style.display='none'" style="flex:1;">انصراف</button>
        </div>
      </form>
    </div>

    <details style="margin-top:14px;">
      <summary style="cursor:pointer; font-weight:700; font-size:13px;">+ افزودن فیلد به این گام</summary>
      <form method="post" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:10px; margin-top:12px;">
        <?= csrf_field() ?>
        <input type="hidden" name="action" value="add_field">
        <input type="hidden" name="step_id" value="<?= (int) $step['id'] ?>">
        <div class="field"><label>کلید فیلد (انگلیسی، یکتا)</label><input type="text" name="field_key" required placeholder="e.g. company_name"></div>
        <div class="field"><label>برچسب نمایشی</label><input type="text" name="label" required></div>
        <div class="field">
          <label>نوع فیلد</label>
          <select name="type">
            <?php foreach ($typeLabels as $val => $lbl): ?>
              <option value="<?= e($val) ?>"><?= e($lbl) ?></option>
            <?php endforeach; ?>
          </select>
        </div>
        <div class="field"><label>آیکون (اختیاری)</label><input type="text" name="icon_name" placeholder="مثلاً home"></div>
        <div class="field"><label>Placeholder (اختیاری)</label><input type="text" name="placeholder"></div>
        <div class="field" style="align-self:end;"><label><input type="checkbox" name="is_required" style="width:auto;"> الزامی باشد</label></div>
        <div class="field">
          <label>وابسته به فیلد (اختیاری)</label>
          <select name="depends_on">
            <option value="">-- بدون وابستگی --</option>
            <?php foreach ($fieldsByStep[$step['id']] ?? [] as $existingField): ?>
              <option value="<?= e($existingField['field_key']) ?>"><?= e($existingField['label']) ?> [<?= e($existingField['field_key']) ?>]</option>
            <?php endforeach; ?>
          </select>
        </div>
        <div class="field">
          <label>مقدار شرط (اختیاری)</label>
          <input type="text" name="depends_value" placeholder="مثلاً sliding یا sliding,casement">
          <small style="display:block; font-size:11px; color:#666; margin-top:4px;">برای چند مقدار، با کاما جدا کنید</small>
        </div>
        <div class="field" style="grid-column:1/-1;">
          <label>گزینه‌ها (فقط برای «لیست کشویی» / «کارت انتخابی») — هر خط: مقدار|برچسب|آیکون(اختیاری)</label>
          <textarea name="options_text" rows="3" placeholder="sliding|پنجره کشویی|window"></textarea>
        </div>
        <div class="field" style="grid-column:1/-1;"><button class="btn" type="submit">افزودن فیلد</button></div>
      </form>
    </details>
  </div>
<?php endforeach; ?>

<script src="assets/js/admin.js"></script>
<script>
const csrfToken = <?= json_encode(csrf_token()) ?>;
<?php foreach ($steps as $step): ?>
initSortable('fields-<?= (int) $step['id'] ?>', 'form_builder.php', csrfToken, 'reorder_fields');
<?php endforeach; ?>

// Attach edit handlers once after DOM is ready
document.querySelectorAll('.btn-edit-field').forEach(btn => {
  btn.addEventListener('click', () => {
    const stepId = btn.dataset.step;
    const panel = document.getElementById('editFieldPanel-' + stepId);
    if (!panel) return;
    panel.querySelector('.edit-field-id').value = btn.dataset.id;
    panel.querySelector('.edit-field-step').value = btn.dataset.step;
    panel.querySelector('.edit-field-key').value = btn.dataset.key;
    panel.querySelector('.edit-field-label').value = btn.dataset.label;
    panel.querySelector('.edit-field-type').value = btn.dataset.type;
    panel.querySelector('.edit-field-icon').value = btn.dataset.icon || '';
    panel.querySelector('.edit-field-placeholder').value = btn.dataset.placeholder || '';
    panel.querySelector('.edit-field-required').checked = btn.dataset.required === '1';
    panel.querySelector('.edit-field-depends').value = btn.dataset.depends || '';
    panel.querySelector('.edit-field-depends-value').value = btn.dataset.dependsValue || '';
    let opts = '';
    try {
      const optionsArr = JSON.parse(btn.dataset.options || '[]');
      opts = optionsArr.map(o => (o.value||'') + '|' + (o.label||'') + '|' + (o.icon||'')).join('\n');
    } catch (e) {
      console.error('Failed to parse options:', e, btn.dataset.options);
    }
    panel.querySelector('.edit-field-options').value = opts;
    // Hide other panels first
    document.querySelectorAll('[id^=\"editFieldPanel-\"]').forEach(p => p.style.display = 'none');
    panel.style.display = 'block';
    panel.scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
<?php admin_foot(); ?>
