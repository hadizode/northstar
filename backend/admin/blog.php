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
        $title   = clean_str($_POST['title'] ?? '');
        $slug    = clean_str($_POST['slug'] ?? '');
        $excerpt = clean_str($_POST['excerpt'] ?? '');
        $content = clean_str($_POST['content'] ?? '');
        $category = clean_str($_POST['category'] ?? '');
        
        if ($title === '') {
            $error = 'عنوان مقاله الزامی است.';
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
                $authorId = $_SESSION['admin_id'] ?? null;
                db()->prepare('INSERT INTO blog_posts (title, slug, excerpt, content, image, category, author_id, is_published, created_at) VALUES (:t,:s,:e,:c,:i,:cat,:aid,1,NOW())')
                    ->execute([
                        't' => $title, 
                        's' => $slug ?: null, 
                        'e' => $excerpt ?: null, 
                        'c' => $content ?: null, 
                        'i' => $image, 
                        'cat' => $category ?: null,
                        'aid' => $authorId,
                    ]);
                $message = 'مقاله اضافه شد.';
            }
        }
    } elseif ($action === 'delete') {
        $id = (int) ($_POST['id'] ?? 0);
        $row = db()->prepare('SELECT image FROM blog_posts WHERE id = :id');
        $row->execute(['id' => $id]);
        if ($img = $row->fetchColumn()) {
            $path = rtrim(MEDIA_UPLOAD_DIR, '/') . '/' . basename($img);
            if (is_file($path)) @unlink($path);
        }
        // Delete associated comments
        db()->prepare('DELETE FROM blog_comments WHERE post_id = :id')->execute(['id' => $id]);
        db()->prepare('DELETE FROM blog_posts WHERE id = :id')->execute(['id' => $id]);
        $message = 'مقاله حذف شد.';
    } elseif ($action === 'edit') {
        $id = (int) ($_POST['id'] ?? 0);
        $title   = clean_str($_POST['title'] ?? '');
        $slug    = clean_str($_POST['slug'] ?? '');
        $excerpt = clean_str($_POST['excerpt'] ?? '');
        $content = clean_str($_POST['content'] ?? '');
        $category = clean_str($_POST['category'] ?? '');
        
        if ($title === '') {
            $error = 'عنوان مقاله الزامی است.';
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
                    $oldRow = db()->prepare('SELECT image FROM blog_posts WHERE id = :id');
                    $oldRow->execute(['id' => $id]);
                    $oldImg = $oldRow->fetchColumn();
                    if ($oldImg) {
                        $oldPath = rtrim(MEDIA_UPLOAD_DIR, '/') . '/' . basename($oldImg);
                        if (is_file($oldPath)) @unlink($oldPath);
                    }
                    db()->prepare('UPDATE blog_posts SET title=:t, slug=:s, excerpt=:e, content=:c, image=:i, category=:cat WHERE id=:id')
                        ->execute(['t'=>$title, 's'=>$slug?:null, 'e'=>$excerpt?:null, 'c'=>$content?:null, 'i'=>$image, 'cat'=>$category?:null, 'id'=>$id]);
                } else {
                    db()->prepare('UPDATE blog_posts SET title=:t, slug=:s, excerpt=:e, content=:c, category=:cat WHERE id=:id')
                        ->execute(['t'=>$title, 's'=>$slug?:null, 'e'=>$excerpt?:null, 'c'=>$content?:null, 'cat'=>$category?:null, 'id'=>$id]);
                }
                $message = 'مقاله ویرایش شد.';
            }
        }
    } elseif ($action === 'toggle') {
        db()->prepare('UPDATE blog_posts SET is_published = 1 - is_published WHERE id = :id')
            ->execute(['id' => (int) ($_POST['id'] ?? 0)]);
        $message = 'وضعیت انتشار به‌روزرسانی شد.';
    }
}

$posts = db()->query('SELECT * FROM blog_posts ORDER BY created_at DESC')->fetchAll();

admin_head('وبلاگ');
admin_nav('blog');
?>
<div class="topbar"><h2>مدیریت وبلاگ (<?= count($posts) ?> مقاله)</h2></div>
<?php if ($message): ?><div class="alert ok"><?= e($message) ?></div><?php endif; ?>
<?php if ($error): ?><div class="alert error"><?= e($error) ?></div><?php endif; ?>

<div class="panel" style="margin-bottom:20px;">
  <h3 style="margin-top:0;">افزودن مقاله جدید</h3>
  <form method="post" enctype="multipart/form-data" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:12px;">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="add">
    <div class="field" style="grid-column: 1 / -1;"><label>عنوان مقاله *</label><input type="text" name="title" required></div>
    <div class="field"><label>اسلاگ (اختیاری)</label><input type="text" name="slug" placeholder="my-article-slug"></div>
    <div class="field"><label>دسته‌بندی</label><input type="text" name="category" placeholder="مثلاً: آموزشی"></div>
    <div class="field" style="grid-column: 1 / -1;"><label>خلاصه مقاله</label><textarea name="excerpt" rows="2" placeholder="خلاصه کوتاه برای نمایش در لیست"></textarea></div>
    <div class="field" style="grid-column: 1 / -1;"><label>محتوای کامل</label><textarea name="content" rows="8" placeholder="محتوای اصلی مقاله..."></textarea></div>
    <div class="field"><label>تصویر شاخص</label><input type="file" name="image" accept=".jpg,.jpeg,.png,.webp"></div>
    <div class="field" style="align-self:end;"><button class="btn" type="submit" style="width:100%;">افزودن مقاله</button></div>
  </form>
</div>

<div class="panel">
  <h3 style="margin-top:0;">لیست مقالات</h3>
  <table class="data-table">
    <thead>
      <tr>
        <th>تصویر</th>
        <th>عنوان</th>
        <th>دسته‌بندی</th>
        <th>تاریخ</th>
        <th>بازدید</th>
        <th>نظرات</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($posts as $p): ?>
        <tr>
          <td>
            <?php if ($p['image']): ?>
              <img class="thumb" src="<?= e(MEDIA_UPLOAD_URL . $p['image']) ?>" alt="">
            <?php else: ?>
              <span class="material-symbols-outlined muted">image</span>
            <?php endif; ?>
          </td>
          <td><b><?= e($p['title']) ?></b></td>
          <td><?= e($p['category'] ?? '-') ?></td>
          <td dir="ltr"><?= e(substr($p['created_at'], 0, 10)) ?></td>
          <td><?= (int) $p['view_count'] ?></td>
          <td>
            <?php 
            $commentCount = db()->prepare('SELECT COUNT(*) FROM blog_comments WHERE post_id = :id');
            $commentCount->execute(['id' => $p['id']]);
            echo $commentCount->fetchColumn();
            ?>
          </td>
          <td>
            <span class="badge <?= $p['is_published'] ? 'badge-success' : 'badge-warning' ?>">
              <?= $p['is_published'] ? 'منتشر شده' : 'پیش‌نویس' ?>
            </span>
          </td>
          <td>
            <form method="post" style="display:inline;">
              <?= csrf_field() ?><input type="hidden" name="action" value="toggle"><input type="hidden" name="id" value="<?= (int) $p['id'] ?>">
              <button class="btn ghost" type="submit"><?= $p['is_published'] ? 'عدم انتشار' : 'انتشار' ?></button>
            </form>
            <button class="btn ghost btn-edit-blog" data-id="<?= (int) $p['id'] ?>" data-title="<?= e($p['title']) ?>" data-slug="<?= e($p['slug'] ?? '') ?>" data-category="<?= e($p['category'] ?? '') ?>" data-excerpt="<?= e($p['excerpt'] ?? '') ?>" data-content="<?= e($p['content'] ?? '') ?>">ویرایش</button>
            <form method="post" style="display:inline;" onsubmit="return confirm('حذف شود؟');">
              <?= csrf_field() ?><input type="hidden" name="action" value="delete"><input type="hidden" name="id" value="<?= (int) $p['id'] ?>">
              <button class="btn danger" type="submit">حذف</button>
            </form>
          </td>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
</div>

<div class="panel" id="editBlogPanel" style="display:none; margin-bottom:20px;">
  <h3 style="margin-top:0;">ویرایش مقاله</h3>
  <form method="post" enctype="multipart/form-data" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:12px;">
    <?= csrf_field() ?>
    <input type="hidden" name="action" value="edit">
    <input type="hidden" name="id" id="editBlogId">
    <div class="field" style="grid-column: 1 / -1;"><label>عنوان مقاله *</label><input type="text" name="title" id="editBlogTitle" required></div>
    <div class="field"><label>اسلاگ</label><input type="text" name="slug" id="editBlogSlug"></div>
    <div class="field"><label>دسته‌بندی</label><input type="text" name="category" id="editBlogCategory"></div>
    <div class="field" style="grid-column: 1 / -1;"><label>خلاصه مقاله</label><textarea name="excerpt" id="editBlogExcerpt" rows="2"></textarea></div>
    <div class="field" style="grid-column: 1 / -1;"><label>محتوای کامل</label><textarea name="content" id="editBlogContent" rows="8"></textarea></div>
    <div class="field"><label>تصویر جدید (اختیاری)</label><input type="file" name="image" accept=".jpg,.jpeg,.png,.webp"></div>
    <div class="field" style="align-self:end; display:flex; gap:8px;">
      <button class="btn" type="submit" style="flex:1;">ذخیره تغییرات</button>
      <button class="btn ghost" type="button" onclick="document.getElementById('editBlogPanel').style.display='none'" style="flex:1;">انصراف</button>
    </div>
  </form>
</div>

<script>
document.querySelectorAll('.btn-edit-blog').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('editBlogId').value = btn.dataset.id;
    document.getElementById('editBlogTitle').value = btn.dataset.title;
    document.getElementById('editBlogSlug').value = btn.dataset.slug || '';
    document.getElementById('editBlogCategory').value = btn.dataset.category || '';
    document.getElementById('editBlogExcerpt').value = btn.dataset.excerpt || '';
    document.getElementById('editBlogContent').value = btn.dataset.content || '';
    document.getElementById('editBlogPanel').style.display = 'block';
    document.getElementById('editBlogPanel').scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
<?php admin_foot(); ?>
