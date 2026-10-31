window.ALMAZAZ_ICON = function icon(name) {
  const paths = {
    protein:'<circle cx="12" cy="12" r="8"/><path d="M8 13c1-2 3-3 6-3 1.5 0 2.5.5 3 1.3-.6 2.2-2.6 4.7-5.7 4.7-1.7 0-3-.7-3.3-2"/><path d="M4 4v6M2.5 4v3M5.5 4v3M20 4v6"/>',
    salad:'<path d="M3 13h18l-1.3 5.2A3 3 0 0 1 16.8 20H7.2a3 3 0 0 1-2.9-1.8L3 13Z"/><path d="M5 12c.8-2.2 2.2-3.2 4.2-3.2M19 12c-.7-2.2-2.1-3.2-4-3.2M10 13c-.8-1.8-.4-3.5 1.5-5M13.5 11c.1-2.4 1.3-4 3.5-4.7"/>',
    sandwich:'<path d="M4 9c0-3.4 3.5-5.5 8-5.5s8 2.1 8 5.5H4ZM3 13h18M4 17h16M5 20h14l1-3H4l1 3ZM4 9l1 4h14l1-4"/>',
    plate:'<circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="4.5"/><path d="M2 4v6m2-6v6M3 10v10M21 4v16"/>',
    drink:'<path d="M5 8h14l-1.2 12H6.2L5 8ZM4 8h16M12 8l3-5h4"/><path d="M8 12h8"/>',
    dessert:'<path d="M5 11h14l-1.3 9H6.3L5 11ZM4 11c0-2.2 1.5-3.5 3.5-3.5.7-2.1 2.5-3.2 4.5-2.5 1.6-.8 3.5.2 4 2 2.4-.1 4 1.4 4 4H4Z"/><circle cx="12" cy="4" r="1"/>'
  };
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]||paths.plate}</svg>`;
};
