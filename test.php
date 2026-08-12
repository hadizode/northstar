<?php
$host = 'localhost';
$user = 'me';
$password = 'goodyear'; // رمز عبور خود را وارد کنید

try {
    $pdo = new PDO("mysql:host=$host", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "<h1 style='color:green;'>✅ اتصال PDO به MariaDB موفق!</h1>";
    echo "<p>نسخه سرور: " . $pdo->getAttribute(PDO::ATTR_SERVER_VERSION) . "</p>";
    
    // نمایش لیست دیتابیس‌ها
    $stmt = $pdo->query("SHOW DATABASES");
    echo "<h2>📁 دیتابیس‌ها:</h2><ul>";
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<li>" . $row['Database'] . "</li>";
    }
    echo "</ul>";
    
} catch (PDOException $e) {
    echo "<h1 style='color:red;'>❌ خطا در اتصال PDO</h1>";
    echo "<p>خطا: " . $e->getMessage() . "</p>";
}
?>