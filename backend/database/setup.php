<?php
/**
 * setup.php — ONE-TIME installer.
 *
 * Security fixes vs the old database.php:
 *   - Self-locks after a successful run (writes install.lock) so it can
 *     never be re-run or abused once the site is live.
 *   - .htaccess in this folder blocks direct access to schema.sql itself.
 *   - Still shown once: a random admin password, then never again.
 *
 * HOW TO USE:
 *   1. Set DB_* in config/config.php
 *   2. Visit this file once in the browser
 *   3. Copy the generated admin password and log in immediately to change it
 *   4. The script locks itself automatically after step 2 succeeds.
 */

require_once __DIR__ . '/../config/config.php';

$lockFile = __DIR__ . '/install.lock';
if (is_file($lockFile)) {
    http_response_code(403);
    die('Setup has already run. Delete database/install.lock manually if you really need to re-run it.');
}

$dsn = sprintf('mysql:host=%s;charset=%s', DB_HOST, DB_CHARSET);

try {
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

    $pdo->exec(sprintf(
        'CREATE DATABASE IF NOT EXISTS `%s` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci',
        str_replace('`', '', DB_NAME)
    ));
    $pdo->exec(sprintf('USE `%s`', str_replace('`', '', DB_NAME)));

    $sql = file_get_contents(__DIR__ . '/schema.sql');
    if ($sql === false) {
        throw new RuntimeException('Could not read schema.sql');
    }

    // Split top-level statements on ";\n" (schema has no semicolons inside
    // string literals other than inside JSON_OBJECT values, which don't
    // contain ";" in this schema).
    foreach (array_filter(array_map('trim', explode(";\n", $sql))) as $statement) {
        if ($statement === '') continue;
        $pdo->exec($statement);
    }

    echo "<h2>Database + tables created successfully.</h2>";

    $count = (int) $pdo->query('SELECT COUNT(*) FROM admins')->fetchColumn();
    if ($count === 0) {
        $username = 'admin';
        $password = bin2hex(random_bytes(6));
        $hash     = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $pdo->prepare('INSERT INTO admins (username, password_hash) VALUES (:u, :p)');
        $stmt->execute(['u' => $username, 'p' => $hash]);

        echo "<h3>Default admin account created:</h3>";
        echo "<p>Username: <b>" . htmlspecialchars($username) . "</b><br>";
        echo "Password: <b>" . htmlspecialchars($password) . "</b></p>";
        echo "<p style='color:#b00'>Copy this password now, then log in and change it immediately.</p>";
    } else {
        echo "<p>Admin account already exists — skipping default admin creation.</p>";
    }

    // Create upload directories with .htaccess that blocks script execution.
    foreach ([MEDIA_UPLOAD_DIR, ORDER_UPLOAD_DIR] as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
        $ht = rtrim($dir, '/') . '/.htaccess';
        if (!is_file($ht)) {
            file_put_contents($ht, "php_flag engine off\n<FilesMatch \"\\.(php|phtml|php\\d)$\">\n  Require all denied\n</FilesMatch>\n");
        }
    }

    file_put_contents($lockFile, 'installed_at=' . date('c') . "\n");

    echo "<p><a href='../admin/login.php'>Go to admin login</a></p>";
    echo "<p style='color:#b00'>This installer is now locked and cannot be run again.</p>";
} catch (Throwable $ex) {
    http_response_code(500);
    echo '<pre>Setup failed: ' . htmlspecialchars($ex->getMessage()) . '</pre>';
}
