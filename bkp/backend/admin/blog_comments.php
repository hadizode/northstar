<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/partials.php';

$message = '';
$error   = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    if (!csrf_verify($_POST['csrf_token'] ?? null)) {
        $error = 'درخواست نامعتبر است.';
    } elseif ($action === 'approve') {
        $id = (int) ($_POST['id'] ?? 0);
        db()->prepare('UPDATE blog_comments SET is_approved = 1 WHERE id = :id')->execute(['id' => $id]);
        $message = 'نظر تایید شد.';
    } elseif ($action === 'reject') {
        $id = (int) ($_POST['id'] ?? 0);
        db()->prepare('UPDATE blog_comments SET is_approved = 0 WHERE id = :id')->execute(['id' => $id]);
        $message = 'نظر رد شد.';
    } elseif ($action === 'delete') {
        $id = (int) ($_POST['id'] ?? 0);
        db()->prepare('DELETE FROM blog_comments WHERE id = :id')->execute(['id' => $id]);
        $message = 'نظر حذف شد.';
    }
}

// Get all comments with post info
$comments = db()->query('
    SELECT c.*, p.title as post_title
    FROM blog_comments c
    JOIN blog_posts p ON c.post_id = p.id
    ORDER BY c.created_at DESC
')->fetchAll();

admin_head('نظرات وبلاگ');
admin_nav('blog_comments');
?>
<div class="topbar"><h2>مدیریت نظرات (<?= count($comments) ?> نظر)</h2></div>
<?php if ($message): ?><div class="alert ok"><?= e($message) ?></div><?php endif; ?>
<?php if ($error): ?><div class="alert error"><?= e($error) ?></div><?php endif; ?>

<div class="panel">
  <table class="data-table">
    <thead>
      <tr>
        <th>نویسنده</th>
        <th>مقاله</th>
        <th>محتوا</th>
        <th>تاریخ</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($comments as $c): ?>
        <tr>
          <td>
            <?= e($c['author_name'] ?: 'ناشناس') ?>
            <?php if ($c['author_email']): ?>
              <br><small class="text-surface/60"><?= e($c['author_email']) ?></small>
            <?php endif; ?>
          </td>
          <td><a href="blog.php" class="text-primary"><?= e($c['post_title']) ?></a></td>
          <td style="max-width: 300px;"><?= e(mb_strimwidth($c['content'], 0, 100, '...')) ?></td>
          <td dir="ltr"><?= e(substr($c['created_at'], 0, 19)) ?></td>
          <td>
            <span class="badge <?= $c['is_approved'] ? 'badge-success' : 'badge-warning' ?>">
              <?= $c['is_approved'] ? 'تایید شده' : 'در انتظار بررسی' ?>
            </span>
          </td>
          <td>
            <?php if (!$c['is_approved']): ?>
              <form method="post" style="display:inline;">
                <?= csrf_field() ?><input type="hidden" name="action" value="approve"><input type="hidden" name="id" value="<?= (int) $c['id'] ?>">
                <button class="btn ghost" type="submit">تایید</button>
              </form>
            <?php endif; ?>
            <form method="post" style="display:inline;" onsubmit="return confirm('حذف شود؟');">
              <?= csrf_field() ?><input type="hidden" name="action" value="delete"><input type="hidden" name="id" value="<?= (int) $c['id'] ?>">
              <button class="btn danger" type="submit">حذف</button>
            </form>
          </td>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>
</div>
<?php admin_foot(); ?>
