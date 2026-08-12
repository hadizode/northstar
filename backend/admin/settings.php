<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/partials.php';

$message = '';
$error   = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrf_verify($_POST['csrf_token'] ?? null)) {
        $error = 'درخواست نامعتبر است.';
    } else {
        $rows = db()->query('SELECT id, setting_key, type FROM settings')->fetchAll();
        $update = db()->prepare('UPDATE settings SET value = :v WHERE id = :id');

        foreach ($rows as $row) {
            $key = $row['setting_key'];

            if ($row['type'] === 'image' && !empty($_FILES['file_' . $key]['name'])) {
                try {
                    $filename = handle_image_upload($_FILES['file_' . $key], MEDIA_UPLOAD_DIR);
                    $update->execute(['v' => $filename, 'id' => $row['id']]);
                } catch (Throwable $ex) {
                    $error = $ex->getMessage();
                }
                continue;
            }

            if (isset($_POST['val_' . $key])) {
                $update->execute(['v' => clean_str($_POST['val_' . $key]), 'id' => $row['id']]);
            }
        }
        if (!$error) $message = 'تنظیمات با موفقیت ذخیره شد.';
    }
}

$settings = db()->query('SELECT * FROM settings ORDER BY group_name, sort_order')->fetchAll();
$groups = [];
foreach ($settings as $s) $groups[$s['group_name']][] = $s;

$groupLabels = [
    'colors'        => 'رنگ‌ها',
    'general'       => 'اطلاعات عمومی سایت',
    'hero'          => 'بخش معرفی (Hero)',
    'collaboration' => 'بخش همکاری',
];

admin_head('تنظیمات و رنگ‌ها');
admin_nav('settings');
?>
<div class="topbar"><h2>تنظیمات و رنگ‌ها</h2></div>
<?php if ($message): ?><div class="alert ok"><?= e($message) ?></div><?php endif; ?>
<?php if ($error): ?><div class="alert error"><?= e($error) ?></div><?php endif; ?>

<form method="post" enctype="multipart/form-data">
  <?= csrf_field() ?>
  <?php foreach ($groups as $groupName => $items): ?>
    <div class="panel" style="margin-bottom:20px;">
      <h3 style="margin-top:0;"><?= e($groupLabels[$groupName] ?? $groupName) ?></h3>
      <div class="settings-grid">
        <?php foreach ($items as $s): ?>
          <div class="field">
            <label><?= e($s['label']) ?></label>
            <?php if ($s['type'] === 'color'): ?>
              <div class="color-row">
                <input type="color" value="<?= e($s['value'] ?: '#000000') ?>"
                       oninput="this.nextElementSibling.value=this.value">
                <input type="text" name="val_<?= e($s['setting_key']) ?>" value="<?= e($s['value']) ?>">
              </div>
            <?php elseif ($s['type'] === 'textarea'): ?>
              <textarea name="val_<?= e($s['setting_key']) ?>" rows="3"><?= e($s['value']) ?></textarea>
            <?php elseif ($s['type'] === 'image'): ?>
              <?php if ($s['value']): ?>
                <img src="<?= e(MEDIA_UPLOAD_URL . $s['value']) ?>" style="max-width:160px;border-radius:8px;display:block;margin-bottom:8px;">
              <?php endif; ?>
              <input type="file" name="file_<?= e($s['setting_key']) ?>" accept=".jpg,.jpeg,.png,.webp">
            <?php else: ?>
              <input type="text" name="val_<?= e($s['setting_key']) ?>" value="<?= e($s['value']) ?>">
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  <?php endforeach; ?>
  <button class="btn" type="submit">ذخیره تغییرات</button>
</form>
<?php admin_foot(); ?>
