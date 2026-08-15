---
name: totvs-design
description: Use this skill to generate well-branded interfaces and assets for TOTVS, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick facts
- **Voice:** trusted advisor — *dinâmico, colaborativo, resolutivo*. First person plural ("a gente" / "nós" / "a TOTVS"). Formula: contexto + orientação + benefício + próximo passo. See README "CONTENT FUNDAMENTALS".
- **Colors:** dark navy `#002233` + cyan `#00DBFF` core; white frames; purple `#A44DFF` accent; tertiary brights (green `#00FFD4`, lime `#D9FF65`, orange `#FF8900`, pink `#FF009E`). Text on cyan is the dark navy.
- **Type:** display = official **TOTVS** typeface (webfonts in `assets/fonts/`); body = **Verdana**.
- **Icons:** proprietary thin line set (substituted with **Phosphor** regular via CDN).
- **Shape language:** soft rounded corners, navy-tinted soft shadows, the "O" grafismo (cropped lens ring), brisk ease-out motion.

## Files
- `styles.css` — link this for all tokens. `tokens/*.css` — colors, type, spacing, effects.
- `assets/` — official logo (SVG + PNG, dark + white, full lockup + symbol).
- `01-fundamentos/` — color/type/spacing/brand specimen cards.
- `components/` — React primitives (Button, Card, Badge, Avatar, Input, Switch, Checkbox, Alert, ProgressBar, Tabs). Mount via `window.TOTVSDesignSystem_be3538` after loading `_ds_bundle.js`.
- `05-ui-kits/gestao/` — interactive product recreation (login → dashboard → pedidos).
- `03-slides/` — sample 1280×720 slide layouts mirroring the official deck template.
