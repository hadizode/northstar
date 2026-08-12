<?php
require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';

function require_login(): void
{
    $isAjax = (
        !empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
        strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest'
    );

    if (empty($_SESSION['admin_id'])) {
        if ($isAjax) json_response(['error' => 'Not authenticated'], 401);
        header('Location: login.php');
        exit;
    }

    if (!empty($_SESSION['last_active']) && (time() - $_SESSION['last_active']) > ADMIN_SESSION_IDLE_TIMEOUT) {
        session_unset();
        session_destroy();
        if ($isAjax) json_response(['error' => 'Session expired'], 401);
        header('Location: login.php?expired=1');
        exit;
    }

    $_SESSION['last_active'] = time();
}

require_login();

$CURRENT_ADMIN_ID = (int) $_SESSION['admin_id'];
