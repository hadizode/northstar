// Shared helper for AJAX calls from the admin panel.
async function adminFetch(url, options = {}) {
  options.headers = Object.assign({ "X-Requested-With": "XMLHttpRequest" }, options.headers || {});
  const res = await fetch(url, options);
  if (res.status === 401) {
    window.location.href = "login.php?expired=1";
    return null;
  }
  return res;
}

function confirmAction(message) {
  return window.confirm(message);
}

/**
 * Enables drag-and-drop reordering on a <ul id="listId"> of <li data-id="...">.
 * On drop, POSTs the new id order back to `endpoint` as JSON under `order`,
 * using `action` (default "reorder").
 */
function initSortable(listId, endpoint, csrfToken, action = 'reorder') {
  const list = document.getElementById(listId);
  if (!list) return;

  let dragEl = null;

  list.querySelectorAll('.sortable-item').forEach(makeDraggable);

  function makeDraggable(item) {
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragstart', () => {
      dragEl = item;
      item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      dragEl = null;
      persistOrder();
    });
  }

  list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const after = getDragAfterElement(list, e.clientY);
    if (!dragEl) return;
    if (after == null) {
      list.appendChild(dragEl);
    } else {
      list.insertBefore(dragEl, after);
    }
  });

  function getDragAfterElement(container, y) {
    const els = [...container.querySelectorAll('.sortable-item:not(.dragging)')];
    return els.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    }, { offset: -Infinity }).element;
  }

  async function persistOrder() {
    const ids = [...list.querySelectorAll('.sortable-item')].map(li => li.dataset.id);
    const form = new FormData();
    form.append('action', action);
    form.append('order', JSON.stringify(ids));
    form.append('csrf_token', csrfToken);
    await adminFetch(endpoint, { method: 'POST', body: form });
  }
}
