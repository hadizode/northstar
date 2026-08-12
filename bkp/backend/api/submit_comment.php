<?php
/**
 * Submit Comment API - POST new comment or reply
 */
require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json; charset=utf-8');
apply_cors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'method not allowed'], 405);
}

$input = json_decode(file_get_contents('php://input'), true);
$postId = (int) ($input['post_id'] ?? 0);
$content = clean_str($input['content'] ?? '');
$parentId = isset($input['parent_id']) ? (int) $input['parent_id'] : null;
$authorName = clean_str($input['author_name'] ?? '');
$authorEmail = clean_str($input['author_email'] ?? '');

if ($postId <= 0 || $content === '') {
    json_response(['error' => 'اطلاعات نامعتبر است'], 400);
}

// Check if post exists and is published
$postCheck = db()->prepare('SELECT id FROM blog_posts WHERE id = :id AND is_published = 1');
$postCheck->execute(['id' => $postId]);
if (!$postCheck->fetch()) {
    json_response(['error' => 'مقاله یافت نشد'], 404);
}

// If replying, check parent comment exists
if ($parentId !== null) {
    $parentCheck = db()->prepare('SELECT id FROM blog_comments WHERE id = :id AND post_id = :post_id AND is_approved = 1');
    $parentCheck->execute(['id' => $parentId, 'post_id' => $postId]);
    if (!$parentCheck->fetch()) {
        json_response(['error' => 'نظر والد یافت نشد'], 404);
    }
}

try {
    $stmt = db()->prepare('
        INSERT INTO blog_comments (post_id, parent_id, author_name, author_email, content, is_approved, created_at)
        VALUES (:post_id, :parent_id, :author_name, :author_email, :content, 0, NOW())
    ');
    $stmt->execute([
        'post_id' => $postId,
        'parent_id' => $parentId,
        'author_name' => $authorName ?: null,
        'author_email' => $authorEmail ?: null,
        'content' => $content,
    ]);
    
    $commentId = (int) db()->lastInsertId();
    
    json_response(['ok' => true, 'comment_id' => $commentId]);
} catch (PDOException $ex) {
    error_log('Comment insert failed: ' . $ex->getMessage());
    json_response(['error' => 'خطا در ثبت نظر'], 500);
}
