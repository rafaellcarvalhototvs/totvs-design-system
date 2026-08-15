# UI Kit — TOTVS Gestão

An interactive, high-fidelity recreation of a **TOTVS-style management / ERP product
surface**, built entirely from this design system's tokens and components. It is a
visual recreation of the brand's product language (navy chrome, cyan accents, soft
cards, rounded geometry) — not a real product spec.

> No TOTVS product codebase or Figma was provided, so screens were composed from the
> brand visual foundations. Re-attach product source (code or Figma) to make these
> pixel-exact to a specific TOTVS product.

## Run
Open `index.html`. Flow: **Login → Dashboard → Pedidos**.
- Login: click **Entrar** (fields are pre-filled).
- Sidebar navigates between areas; **Visão geral** and **Pedidos** are fully built,
  the rest show example placeholders.
- Pedidos: switch tabs, click a row to open the detail panel.

## Files
- `index.html` — app shell + routing state; loads `_ds_bundle.js`, `shell.jsx`, `screens.jsx`.
- `shell.jsx` — `Sidebar`, `Topbar`, shared `Icon` (Phosphor).
- `screens.jsx` — `Login`, `Dashboard` (KPIs, chart, goals, table), `Pedidos` (tabs + table + detail).

## Composes
Button, Card, Badge, Avatar, Input, Checkbox, Tabs, ProgressBar from
`window.TOTVSDesignSystem_be3538`. Icons via Phosphor (bold) CDN — substitute for the
proprietary TOTVS icon set.
