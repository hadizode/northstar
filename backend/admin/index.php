<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/partials.php';

$totalGallery  = (int) db()->query('SELECT COUNT(*) FROM gallery')->fetchColumn();
$totalProducts = (int) db()->query('SELECT COUNT(*) FROM products')->fetchColumn();
$totalOrders   = (int) db()->query('SELECT COUNT(*) FROM orders')->fetchColumn();
$newOrders     = (int) db()->query("SELECT COUNT(*) FROM orders WHERE status = 'new'")->fetchColumn();
$totalPosts    = (int) db()->query('SELECT COUNT(*) FROM blog_posts')->fetchColumn();
$pendingComments = (int) db()->query("SELECT COUNT(*) FROM blog_comments WHERE is_approved = 0")->fetchColumn();

admin_head('داشبورد');
admin_nav('index');
?>
<div class="topbar"><h2>داشبورد</h2><span>خوش آمدید، <?= e($_SESSION['admin_user']) ?></span></div>
<div class="cards">
  <div class="card"><div class="label">کل سفارشات</div><div class="num"><?= $totalOrders ?></div></div>
  <div class="card"><div class="label">سفارشات جدید</div><div class="num"><?= $newOrders ?></div></div>
  <div class="card"><div class="label">محصولات</div><div class="num"><?= $totalProducts ?></div></div>
  <div class="card"><div class="label">آیتم‌های گالری</div><div class="num"><?= $totalGallery ?></div></div>
  <div class="card"><div class="label">مقالات وبلاگ</div><div class="num"><?= $totalPosts ?></div></div>
  <div class="card"><div class="label">نظرات در انتظار</div><div class="num" style="color: <?= $pendingComments > 0 ? '#f59e0b' : 'inherit' ?>;"><?= $pendingComments ?></div></div>
</div>
<div class="panel">
  <p>از منوی کناری برای ویرایش رنگ‌ها، متن‌ها، محصولات، گالری، وبلاگ، نظرات، فیلدهای فرم سفارش و بررسی سفارشات استفاده کنید.
  تمام تغییرات بلافاصله روی سایت اصلی اعمال می‌شوند.</p>
</div>
<?php admin_foot(); ?>
