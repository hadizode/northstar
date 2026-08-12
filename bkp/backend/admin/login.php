<?php
require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';

if (!empty($_SESSION['admin_id'])) {
    header('Location: index.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrf_verify($_POST['csrf_token'] ?? null)) {
        $error = 'درخواست نامعتبر است، لطفا صفحه را رفرش کنید.';
    } else {
        $username = clean_str($_POST['username'] ?? '');
        $password = (string) ($_POST['password'] ?? '');

        if ($username === '' || $password === '') {
            $error = 'نام کاربری و رمز عبور را وارد کنید.';
        } else {
            $stmt = db()->prepare('SELECT id, username, password_hash, failed_logins, locked_until FROM admins WHERE username = :u LIMIT 1');
            $stmt->execute(['u' => $username]);
            $admin = $stmt->fetch();

            $isLocked = $admin && !empty($admin['locked_until']) && strtotime($admin['locked_until']) > time();

            if ($isLocked) {
                $error = 'حساب کاربری به دلیل تلاش‌های ناموفق مکرر موقتا قفل شده است.';
            } elseif ($admin && password_verify($password, $admin['password_hash'])) {
                db()->prepare('UPDATE admins SET failed_logins = 0, locked_until = NULL WHERE id = :id')
                    ->execute(['id' => $admin['id']]);

                session_regenerate_id(true);
                $_SESSION['admin_id']    = $admin['id'];
                $_SESSION['admin_user']  = $admin['username'];
                $_SESSION['last_active'] = time();

                header('Location: index.php');
                exit;
            } else {
                $error = 'نام کاربری یا رمز عبور اشتباه است.';
                if ($admin) {
                    $failed = (int) $admin['failed_logins'] + 1;
                    $lockUntil = $failed >= 5 ? date('Y-m-d H:i:s', time() + 300) : null;
                    db()->prepare('UPDATE admins SET failed_logins = :f, locked_until = :l WHERE id = :id')
                        ->execute(['f' => $failed, 'l' => $lockUntil, 'id' => $admin['id']]);
                }
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ورود به پنل مدیریت</title>
<link rel="stylesheet" href="assets/css/admin.css">
</head>
<body>
<div class="login-wrap">
  <div class="login-box">
    <h1>ورود به پنل مدیریت</h1>
    <?php if ($error): ?><div class="alert error"><?= e($error) ?></div><?php endif; ?>
    <?php if (!empty($_GET['expired'])): ?><div class="alert error">نشست شما منقضی شده است، دوباره وارد شوید.</div><?php endif; ?>
    <form method="post" autocomplete="off">
      <?= csrf_field() ?>
      <div class="field"><label>نام کاربری</label><input type="text" name="username" required autofocus></div>
      <div class="field"><label>رمز عبور</label><input type="password" name="password" required></div>
      <button class="btn" style="width:100%; justify-content:center;" type="submit">ورود</button>
    </form>
  </div>
</div>
</body>
</html>
