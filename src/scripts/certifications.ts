const root = document.querySelector<HTMLElement>('[data-certifications]');
if (root) {
  const cards = [...root.querySelectorAll<HTMLElement>('.cert-card')];
  const filters = [...root.querySelectorAll<HTMLButtonElement>('[data-cert-filter]')];
  const more = root.querySelector<HTMLButtonElement>('[data-cert-more]')!;
  const less = root.querySelector<HTMLButtonElement>('[data-cert-less]')!;
  const status = root.querySelector<HTMLElement>('[data-cert-status]')!;
  const pageSize = 6;
  let limit = pageSize;
  let category = 'all';
  const matching = () => cards.filter(card => category === 'all' || card.dataset.category === category);
  const update = () => {
    const matches = matching();
    const visible = new Set(matches.slice(0, limit));
    cards.forEach(card => { card.hidden = !visible.has(card); });
    more.hidden = matches.length <= limit;
    less.hidden = limit <= pageSize || matches.length <= pageSize;
    status.textContent = `${visible.size} sur ${matches.length} certification${matches.length === 1 ? '' : 's'} affichée${visible.size === 1 ? '' : 's'}`;
  };
  filters.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.certFilter!;
    limit = pageSize;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    update();
  }));
  more.addEventListener('click', () => {
    const next = matching()[limit];
    limit += pageSize;
    update();
    next?.focus({ preventScroll: true });
  });
  less.addEventListener('click', () => {
    limit = pageSize;
    update();
    more.focus({ preventScroll: true });
    root.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  update();
}
export {};
