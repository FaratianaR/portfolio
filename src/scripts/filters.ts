const buttons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const items = document.querySelectorAll<HTMLElement>('[data-filter-items] > [data-category]');
const filterStatus = document.querySelector<HTMLElement>('[data-filter-status]');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  items.forEach(item => {
    item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
    if (!item.hidden) count++;
  });
  if (filterStatus) filterStatus.textContent = `${count} résultat${count > 1 ? 's' : ''}`;
}));
