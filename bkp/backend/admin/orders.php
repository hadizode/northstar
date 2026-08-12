<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/partials.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'update_status') {
    if (!csrf_verify($_POST['csrf_token'] ?? null)) json_response(['error' => 'invalid csrf'], 403);
    $id     = (int) ($_POST['id'] ?? 0);
    $status = $_POST['status'] ?? '';
    $allowed = ['new', 'in_progress', 'done', 'cancelled'];
    if (!in_array($status, $allowed, true)) json_response(['error' => 'invalid status'], 400);
    db()->prepare('UPDATE orders SET status = :s WHERE id = :id')->execute(['s' => $status, 'id' => $id]);
    json_response(['ok' => true]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'delete') {
    if (!csrf_verify($_POST['csrf_token'] ?? null)) json_response(['error' => 'invalid csrf'], 403);
    $id = (int) ($_POST['id'] ?? 0);
    $row = db()->prepare('SELECT image FROM orders WHERE id = :id');
    $row->execute(['id' => $id]);
    if ($img = $row->fetchColumn()) {
        $path = rtrim(ORDER_UPLOAD_DIR, '/') . '/' . basename($img);
        if (is_file($path)) @unlink($path);
    }
    db()->prepare('DELETE FROM orders WHERE id = :id')->execute(['id' => $id]);
    json_response(['ok' => true]);
}

$statusFilter  = $_GET['status'] ?? '';
$allowedStatus = ['new', 'in_progress', 'done', 'cancelled'];
$page    = max(1, (int) ($_GET['page'] ?? 1));
$perPage = 15;
$offset  = ($page - 1) * $perPage;

$where  = '';
$params = [];
if (in_array($statusFilter, $allowedStatus, true)) {
    $where = 'WHERE status = :status';
    $params['status'] = $statusFilter;
}

$countStmt = db()->prepare("SELECT COUNT(*) FROM orders $where");
$countStmt->execute($params);
$total = (int) $countStmt->fetchColumn();

$stmt = db()->prepare("SELECT * FROM orders $where ORDER BY created_at DESC LIMIT :limit OFFSET :offset");
foreach ($params as $k => $v) $stmt->bindValue(":$k", $v);
$stmt->bindValue(':limit', $perPage, PDO::PARAM_INT);
$stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
$stmt->execute();
$orders = $stmt->fetchAll();
$totalPages = (int) ceil($total / $perPage);

// Map field_key -> label so submitted JSON renders with human-readable labels.
$fieldLabels = [];
foreach (db()->query('SELECT field_key, label FROM form_fields')->fetchAll() as $f) {
    $fieldLabels[$f['field_key']] = $f['label'];
}

$statusLabels = ['new' => 'جدید', 'in_progress' => 'در حال انجام', 'done' => 'انجام شده', 'cancelled' => 'لغو شده'];

admin_head('سفارشات');
admin_nav('orders');
?>
<div class="topbar"><h2>سفارشات (<?= $total ?>)</h2></div>
<div class="panel">
  <div class="toolbar">
    <form method="get" style="display:flex; gap:8px;">
      <select name="status" onchange="this.form.submit()">
        <option value="">همه وضعیت‌ها</option>
        <?php foreach ($statusLabels as $val => $label): ?>
          <option value="<?= e($val) ?>" <?= $statusFilter === $val ? 'selected' : '' ?>><?= e($label) ?></option>
        <?php endforeach; ?>
      </select>
    </form>
  </div>

  <table>
    <thead><tr><th>#</th><th>خلاصه</th><th>وضعیت</th><th>تاریخ</th><th>عملیات</th></tr></thead>
    <tbody id="ordersBody">
      <?php foreach ($orders as $o): $data = json_decode($o['form_data'], true) ?: []; ?>
        <tr data-id="<?= (int) $o['id'] ?>">
          <td><?= (int) $o['id'] ?></td>
          <td><?= e($data['name'] ?? '-') ?> — <span dir="ltr"><?= e($data['phone'] ?? '') ?></span></td>
          <td>
            <select class="status-select" data-id="<?= (int) $o['id'] ?>">
              <?php foreach ($statusLabels as $val => $label): ?>
                <option value="<?= e($val) ?>" <?= $o['status'] === $val ? 'selected' : '' ?>><?= e($label) ?></option>
              <?php endforeach; ?>
            </select>
          </td>
          <td><?= e($o['created_at']) ?></td>
          <td>
            <button class="btn ghost btn-view" data-id="<?= (int) $o['id'] ?>">جزئیات</button>
            <button class="btn danger btn-delete-order" data-id="<?= (int) $o['id'] ?>">حذف</button>
          </td>
        </tr>
        <tr class="detail-row" id="detail-<?= (int) $o['id'] ?>" style="display:none;">
          <td colspan="5" style="background:#fbfcfe;">
            <?php if (!empty($o['tracking_code'])): ?>
              <b>کد پیگیری:</b> <?= e($o['tracking_code']) ?><br><br>
            <?php endif; ?>
            <?php foreach ($data as $key => $val): if ($val === '' || $val === null) continue; ?>
              <b><?= e($fieldLabels[$key] ?? $key) ?>:</b> <?= e(is_array($val) ? implode(', ', $val) : (string) $val) ?><br>
            <?php endforeach; ?>
            <?php if (!empty($o['image'])): ?>
              <b>تصویر پیوست:</b><br>
              <img src="<?= e(ORDER_UPLOAD_URL . $o['image']) ?>" style="max-width:220px; border-radius:10px; margin-top:6px;">
            <?php endif; ?>
          </td>
        </tr>
      <?php endforeach; ?>
      <?php if (!$orders): ?><tr><td colspan="5" style="text-align:center; color:var(--text-muted);">سفارشی یافت نشد.</td></tr><?php endif; ?>
    </tbody>
  </table>

  <div class="pagination">
    <?php for ($p = 1; $p <= $totalPages; $p++): ?>
      <a href="?page=<?= $p ?>&status=<?= e($statusFilter) ?>" class="<?= $p === $page ? 'active' : '' ?>"><?= $p ?></a>
    <?php endfor; ?>
  </div>
</div>

<script src="assets/js/admin.js"></script>
<script>
const csrfToken = <?= json_encode(csrf_token()) ?>;

document.getElementById('ordersBody').addEventListener('click', async (e) => {
  const viewBtn = e.target.closest('.btn-view');
  if (viewBtn) {
    const row = document.getElementById('detail-' + viewBtn.dataset.id);
    row.style.display = row.style.display === 'none' ? '' : 'none';
    return;
  }
  const delBtn = e.target.closest('.btn-delete-order');
  if (delBtn) {
    if (!confirmAction('این سفارش حذف شود؟')) return;
    const form = new FormData();
    form.append('action', 'delete');
    form.append('id', delBtn.dataset.id);
    form.append('csrf_token', csrfToken);
    const res = await adminFetch('orders.php', { method: 'POST', body: form });
    if (res && res.ok) {
      delBtn.closest('tr').remove();
      document.getElementById('detail-' + delBtn.dataset.id)?.remove();
    } else {
      alert('حذف با خطا مواجه شد.');
    }
  }
});

document.querySelectorAll('.status-select').forEach(sel => {
  sel.addEventListener('change', async () => {
    const form = new FormData();
    form.append('action', 'update_status');
    form.append('id', sel.dataset.id);
    form.append('status', sel.value);
    form.append('csrf_token', csrfToken);
    const res = await adminFetch('orders.php', { method: 'POST', body: form });
    if (!res || !res.ok) alert('بروزرسانی وضعیت با خطا مواجه شد.');
  });
});
</script>
<?php admin_foot(); ?>
