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
        $name  = clean_str($_POST['name'] ?? '');
        $desc  = clean_str($_POST['description'] ?? '');
        $price = clean_str($_POST['price_min'] ?? '');
        $slug  = clean_str($_POST['slug'] ?? '');

        if ($name === '') {
            $error = 'نام محصول الزامی است.';
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
                $maxSort = (int) db()->query('SELECT COALESCE(MAX(sort_order),0) FROM products')->fetchColumn();
                db()->prepare('INSERT INTO products (name, description, price_min, image, slug, sort_order) VALUES (:n,:d,:p,:i,:s,:so)')
                    ->execute([
                        'n' => $name, 'd' => $desc ?: null,
                        'p' => $price !== '' ? (int) $price : null,
                        'i' => $image, 's' => $slug ?: null, 'so' => $maxSort + 1,
                    ]);
                $message = 'محصول اضافه شد.';
            }
        }
    } elseif ($action === 'delete') {
        $id = (int) ($_POST['id'] ?? 0);
        $row = db()->prepare('SELECT image FROM products WHERE id = :id');
        $row->execute(['id' => $id]);
        if ($img = $row->fetchColumn()) {
            $path = rtrim(MEDIA_UPLOAD_DIR, '/') . '/' . basename($img);
            if (is_file($path)) @unlink($path);
        }
        db()->prepare('DELETE FROM products WHERE id = :id')->execute(['id' => $id]);
        $message = 'محصول حذف شد.';
    } elseif ($action === 'edit') {
        $id = (int) ($_POST['id'] ?? 0);
        $name  = clean_str($_POST['name'] ?? '');
        $desc  = clean_str($_POST['description'] ?? '');
        $price = clean_str($_POST['price_min'] ?? '');
        $slug  = clean_str($_POST['slug'] ?? '');
        if ($name === '') {
            $error = 'نام محصول الزامی است.';
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
                    $oldRow = db()->prepare('SELECT image FROM products WHERE id = :id');
                    $oldRow->execute(['id' => $id]);
                    $oldImg = $oldRow->fetchColumn();
                    if ($oldImg) {
                        $oldPath = rtrim(MEDIA_UPLOAD_DIR, '/') . '/' . basename($oldImg);
                        if (is_file($oldPath)) @unlink($oldPath);
                    }
                    db()->prepare('UPDATE products SET name=:n, description=:d, price_min=:p, image=:i, slug=:s WHERE id=:id')
                        ->execute(['n'=>$name, 'd'=>$desc?:null, 'p'=>$price!==''?(int)$price:null, 'i'=>$image, 's'=>$slug?:null, 'id'=>$id]);
                } else {
                    db()->prepare('UPDATE products SET name=:n, description=:d, price_min=:p, slug=:s WHERE id=:id')
                        ->execute(['n'=>$name, 'd'=>$desc?:null, 'p'=>$price!==''?(int)$price:null, 's'=>$slug?:null, 'id'=>$id]);
                }
                $message = 'محصول ویرایش شد.';
            }
        }
    } elseif ($action === 'toggle') {
        db()->prepare('UPDATE products SET is_active = 1 - is_active WHERE id = :id')
            ->execute(['id' => (int) ($_POST['id'] ?? 0)]);
        $message = 'وضعیت به‌روزرسانی شد.';
    } elseif ($action === 'reorder') {
        $ids = json_decode($_POST['order'] ?? '[]', true) ?: [];
        $stmt = db()->prepare('UPDATE products SET sort_order = :s WHERE id = :id');
        foreach ($ids as $i => $id) $stmt->execute(['s' => $i, 'id' => (int) $id]);
        json_response(['ok' => true]);
    }
}

$products = db()->query('SELECT * FROM products ORDER BY sort_order')->fetchAll();

admin_head('محصولات');
admin_nav('products');
?>
<div class="topbar"><h2>محصولات (<?= count($products) ?>)</h2></div>
<?php if ($message): ?><div class="alert ok"><?= e($message) ?></div><?php endif; ?>
<?php if ($error): ?><div class="alert error"><?= e($error) ?></div><?php endif; ?>

<div class="panel" style="margin-bottom:20px;">
  <h3 style="margin-top:0;">افزودن محصول جدید</h3>
  <form method="post" enctype="multipart/form-data" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="add">
    <div class="field"><label>نام محصول</label><input type="text" name="name" required></div>
    <div class="field"><label>توضیحات</label><input type="text" name="description"></div>
    <div class="field"><label>قیمت شروع (تومان)</label><input type="number" name="price_min" min="0"></div>
    <div class="field"><label>اسلاگ (اختیاری)</label><input type="text" name="slug"></div>
    <div class="field"><label>تصویر</label><input type="file" name="image" accept=".jpg,.jpeg,.png,.webp"></div>
    <div class="field" style="align-self:end;"><button class="btn" type="submit" style="width:100%;">افزودن</button></div>
  </form>
</div>

<div class="panel">
  <h3 style="margin-top:0;">لیست محصولات (قابل جابجایی)</h3>
  <ul class="sortable-list" id="productsList">
    <?php foreach ($products as $p): ?>
      <li data-id="<?= (int) $p['id'] ?>" class="sortable-item">
        <span class="material-symbols-outlined drag-handle">drag_indicator</span>
        <?php if ($p['image']): ?><img class="thumb" src="<?= e(MEDIA_UPLOAD_URL . $p['image']) ?>"><?php endif; ?>
        <b><?= e($p['name']) ?></b>
        <span class="muted"><?= $p['price_min'] ? number_format((int) $p['price_min']) . ' تومان' : '' ?></span>
        <span class="spacer"></span>
        <button class="btn ghost btn-edit-product" data-id="<?= (int) $p['id'] ?>" data-name="<?= e($p['name']) ?>" data-desc="<?= e($p['description'] ?? '') ?>" data-price="<?= e($p['price_min'] ?? '') ?>" data-slug="<?= e($p['slug'] ?? '') ?>">ویرایش</button>
        <form method="post" style="display:inline;">
          <?= csrf_field() ?><input type="hidden" name="action" value="toggle"><input type="hidden" name="id" value="<?= (int) $p['id'] ?>">
          <button class="btn ghost" type="submit"><?= $p['is_active'] ? 'غیرفعال کردن' : 'فعال کردن' ?></button>
        </form>
        <form method="post" style="display:inline;" onsubmit="return confirm('حذف شود؟');">
          <?= csrf_field() ?><input type="hidden" name="action" value="delete"><input type="hidden" name="id" value="<?= (int) $p['id'] ?>">
          <button class="btn danger" type="submit">حذف</button>
        </form>
      </li>
    <?php endforeach; ?>
  </ul>
</div>

<div class="panel" id="editProductPanel" style="display:none; margin-bottom:20px;">
  <h3 style="margin-top:0;">ویرایش محصول</h3>
  <form method="post" enctype="multipart/form-data" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px;">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="edit">
    <input type="hidden" name="id" id="editProductId">
    <div class="field"><label>نام محصول</label><input type="text" name="name" id="editProductName" required></div>
    <div class="field"><label>توضیحات</label><input type="text" name="description" id="editProductDesc"></div>
    <div class="field"><label>قیمت شروع (تومان)</label><input type="number" name="price_min" id="editProductPrice" min="0"></div>
    <div class="field"><label>اسلاگ (اختیاری)</label><input type="text" name="slug" id="editProductSlug"></div>
    <div class="field"><label>تصویر جدید (اختیاری)</label><input type="file" name="image" accept=".jpg,.jpeg,.png,.webp"></div>
    <div class="field" style="align-self:end; display:flex; gap:8px;">
      <button class="btn" type="submit" style="flex:1;">ذخیره تغییرات</button>
      <button class="btn ghost" type="button" onclick="document.getElementById('editProductPanel').style.display='none'" style="flex:1;">انصراف</button>
    </div>
  </form>
</div>

<script src="assets/js/admin.js"></script>
<script>
const csrfToken = <?= json_encode(csrf_token()) ?>;
initSortable('productsList', 'products.php', csrfToken);

document.querySelectorAll('.btn-edit-product').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('editProductId').value = btn.dataset.id;
    document.getElementById('editProductName').value = btn.dataset.name;
    document.getElementById('editProductDesc').value = btn.dataset.desc || '';
    document.getElementById('editProductPrice').value = btn.dataset.price || '';
    document.getElementById('editProductSlug').value = btn.dataset.slug || '';
    document.getElementById('editProductPanel').style.display = 'block';
    document.getElementById('editProductPanel').scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
<?php admin_foot(); ?>
