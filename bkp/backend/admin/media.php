<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/partials.php';

$message = '';
$error   = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    if (!csrf_verify($_POST['csrf_token'] ?? null)) {
        $error = 'درخواست نامعتبر است.';
    } elseif ($action === 'upload') {
        try {
            if (empty($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
                $error = 'انتخاب تصویر الزامی است. کد خطا: ' . ($_FILES['image']['error'] ?? 'نامشخص');
            } else {
                $filename = handle_image_upload($_FILES['image'], MEDIA_UPLOAD_DIR);
                db()->prepare('INSERT INTO media (filename, original_name, alt_text) VALUES (:f,:o,:a)')
                    ->execute([
                        'f' => $filename,
                        'o' => clean_str($_FILES['image']['name']),
                        'a' => clean_str($_POST['alt_text'] ?? ''),
                    ]);
                $message = 'تصویر بارگذاری شد.';
            }
        } catch (Throwable $ex) {
            $error = 'خطای فنی: ' . $ex->getMessage() . ' در فایل ' . $ex->getFile() . ' خط ' . $ex->getLine();
            error_log('Media upload error: ' . $ex->getMessage() . ' in ' . $ex->getFile() . ':' . $ex->getLine());
        }
    } elseif ($action === 'delete') {
        $id = (int) ($_POST['id'] ?? 0);
        $row = db()->prepare('SELECT filename FROM media WHERE id = :id');
        $row->execute(['id' => $id]);
        if ($fn = $row->fetchColumn()) {
            $path = rtrim(MEDIA_UPLOAD_DIR, '/') . '/' . basename($fn);
            if (is_file($path)) @unlink($path);
        }
        db()->prepare('DELETE FROM media WHERE id = :id')->execute(['id' => $id]);
        $message = 'تصویر حذف شد.';
    }
}

$items = db()->query('SELECT * FROM media ORDER BY created_at DESC')->fetchAll();

admin_head('کتابخانه تصاویر');
admin_nav('media');
?>
<div class="topbar"><h2>کتابخانه تصاویر (<?= count($items) ?>)</h2></div>
<?php if ($message): ?><div class="alert ok"><?= e($message) ?></div><?php endif; ?>
<?php if ($error): ?><div class="alert error"><?= e($error) ?></div><?php endif; ?>

<div class="panel" style="margin-bottom:20px;">
  <h3 style="margin-top:0;">بارگذاری تصویر جدید</h3>
  <form method="post" enctype="multipart/form-data" style="display:flex; gap:10px; flex-wrap:wrap; align-items:flex-end;">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="upload">
    <div class="field"><label>فایل تصویر</label><input type="file" name="image" accept=".jpg,.jpeg,.png,.webp" required></div>
    <div class="field" style="flex:1; min-width:200px;"><label>متن جایگزین (alt)</label><input type="text" name="alt_text"></div>
    <button class="btn" type="submit">بارگذاری</button>
  </form>
  <p class="muted" style="margin-top:10px;">این کتابخانه مستقل از محصولات و گالری است و برای استفاده عمومی (مثلاً تصاویر بخش معرفی) در نظر گرفته شده.</p>
</div>

<div class="panel">
  <div class="gallery-grid">
    <?php foreach ($items as $item): ?>
      <div class="gallery-item">
        <img src="<?= e(MEDIA_UPLOAD_URL . $item['filename']) ?>" loading="lazy">
        <div class="meta">
          <p style="word-break:break-all;"><?= e($item['filename']) ?></p>
          <form method="post" onsubmit="return confirm('حذف شود؟');">
            <?= csrf_field() ?><input type="hidden" name="action" value="delete"><input type="hidden" name="id" value="<?= (int) $item['id'] ?>">
            <button class="btn danger" type="submit" style="width:100%;">حذف</button>
          </form>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>
<?php admin_foot(); ?>
