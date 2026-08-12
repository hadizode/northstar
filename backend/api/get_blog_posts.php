<?php
/**
 * Blog API - GET blog posts with comments
 */
require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json; charset=utf-8');
apply_cors();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_response(['error' => 'method not allowed'], 405);
}

$posts = db()->query('
    SELECT p.*, 
           a.username as author_name,
           (SELECT COUNT(*) FROM blog_comments c WHERE c.post_id = p.id AND c.is_approved = 1) as comment_count
    FROM blog_posts p
    LEFT JOIN admins a ON p.author_id = a.id
    WHERE p.is_published = 1
    ORDER BY p.created_at DESC
')->fetchAll();

foreach ($posts as &$post) {
    if ($post['image']) {
        $post['image_url'] = MEDIA_UPLOAD_URL . $post['image'];
    } else {
        $post['image_url'] = null;
    }
    
    // Fetch approved comments for each post (including replies)
    $comments = db()->prepare('
        SELECT c.*
        FROM blog_comments c
        WHERE c.post_id = :post_id AND c.is_approved = 1
        ORDER BY c.created_at ASC
    ');
    $comments->execute(['post_id' => $post['id']]);
    $post['comments'] = $comments->fetchAll();
    
    unset($post['image']);
}
unset($post);

json_response($posts);
