Pill-shaped primary action button in the TOTVS display font; use for the main call-to-action and form submits.

```jsx
<Button variant="cyan" size="md" onClick={save}>Falar com a TOTVS</Button>
<Button variant="primary">Começar agora</Button>
<Button variant="secondary" iconLeft={<i className="ph ph-plus" />}>Adicionar</Button>
```

Variants: `primary` (navy, default), `cyan` (bright brand accent — note dark text on cyan), `secondary` (outline), `ghost` (text-only). Sizes `sm | md | lg`. Props: `fullWidth`, `disabled`, `iconLeft`, `iconRight`. Hover lightens/darkens one step + subtle lift; press translates down 1px. Prefer one primary/cyan button per view.
