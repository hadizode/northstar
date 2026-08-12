<?php
function admin_head(string $title): void
{
    echo "<!DOCTYPE html>\n<html lang=\"fa\" dir=\"rtl\">\n<head>\n";
    echo "<meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">";
    echo "<title>پنل مدیریت | " . e($title) . "</title>";
    echo "<link rel=\"stylesheet\" href=\"assets/css/admin.css\">";
    echo "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400;500;600&display=swap\">";
    echo "</head><body>";
}

function admin_nav(string $active): void
{
    $items = [
        'index'    => ['index.php', 'داشبورد', 'dashboard'],
        'settings' => ['settings.php', 'تنظیمات و رنگ‌ها', 'settings'],
        'benefits' => ['benefits.php', 'مزایا', 'star'],
        'products' => ['products.php', 'محصولات', 'inventory_2'],
        'gallery'  => ['gallery.php', 'گالری', 'photo_library'],
        'blog'     => ['blog.php', 'وبلاگ', 'article'],
        'blog_comments' => ['blog_comments.php', 'نظرات وبلاگ', 'chat_bubble'],
        'form'     => ['form_builder.php', 'فرم سفارش', 'assignment'],
        'orders'   => ['orders.php', 'سفارشات', 'shopping_cart'],
        'media'    => ['media.php', 'کتابخانه تصاویر', 'image'],
    ];
    echo '<div class="layout"><aside class="sidebar">';
    echo '<div class="sidebar-header"><h1>پنل مدیریت NorthStarWin</h1></div>';
    echo '<div class="sidebar-nav"><nav>';
    foreach ($items as $key => [$href, $label, $icon]) {
        $cls = $key === $active ? 'active' : '';
        echo "<a href=\"$href\" class=\"$cls\"><span class=\"material-symbols-outlined icon\">$icon</span>" . e($label) . "</a>";
    }
    echo '</nav></div>';
    echo '<div class="logout-section"><a href="logout.php" class="logout"><span class="material-symbols-outlined icon">logout</span>خروج</a></div>';
    echo '</aside><main class="main">';
}

function admin_foot(): void
{
    echo '</main></div></body></html>';
}
