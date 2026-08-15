Underline-style tab navigation with a cyan active indicator.

```jsx
<Tabs value={tab} onChange={setTab} tabs={[
  { id: 'visao', label: 'Visão geral' },
  { id: 'pedidos', label: 'Pedidos', badge: 12 },
  { id: 'config', label: 'Configurações' },
]} />
```

Each tab: `{ id, label, icon?, badge? }`. Controlled via `value`+`onChange`, or uncontrolled (defaults to first tab).
