# TOTVS Design System

A brand-faithful design system for **TOTVS**, the Brazilian enterprise-technology
company ("TOTVS significa Todos" — TOTVS means *everyone*). TOTVS builds management,
data and software for the productive, entrepreneurial Brazil — gestão, RD Station,
Techfin, and more. The brand voice is that of a **trusted advisor**: an expert
partner who understands the client's business, guides with confidence, and resolves
with practicality.

This system turns the official **Manual de Identidade Visual da Marca TOTVS** and the
**Manual textual da marca TOTVS** into reusable tokens, components, and screens for
producing on-brand interfaces, decks, and assets.

---

## Sources used

- `uploads/Identidade-visual-Marca-TOTVS-06-14-2026_10_07_AM_part1.png` — logo,
  architecture of brands, color system.
- `uploads/Identidade-visual-Marca-TOTVS-06-14-2026_10_07_AM_part2.png` — color
  contrast, typography, *grafismo* (the "O" device), photography direction, icons.
- `uploads/Identidade-visual-Marca-TOTVS-06-14-2026_10_07_AM_part3.png` —
  photography galleries, composition, panels, editorial/corporate applications.
- **Manual textual da marca TOTVS** (pasted brief) — full verbal-identity guidance.

> ✅ The official deck template (provided as `Template_TOTVS 2025…pdf`) was parsed for
> its 32-slide structure (capa, divisórias, agenda, conteúdo, boxes comparativos, big
> numbers, fundos coloridos, frase de impacto, encerramento). The sample slides in
> `03-slides/` mirror those layouts using the brand visual language.

---

## CONTENT FUNDAMENTALS — how TOTVS writes

The verbal identity rests on one thesis: *TOTVS soa como uma especialista parceira que
entende o negócio do cliente, orienta com segurança e resolve com praticidade.*

**Voice = three attributes (vary intensity by channel):**
- **Dinâmico** — energetic, well-paced, direct. Simplifies complex topics without
  dumbing them down. *"A TOTVS conecta gestão, dados e tecnologia para sua empresa
  operar melhor."* (not "ecossistema robusto de soluções para otimização de processos").
- **Colaborativo** — a partner beside you, not above you. Asks, listens, recommends in
  context. *"Vamos entender seu cenário e indicar a solução que faz mais sentido."*
- **Resolutivo** — moves things forward. Objective, organized, names the next step.
  *"Recebemos sua solicitação. Agora vamos analisar o cenário e indicar o melhor caminho."*

**The TOTVS writing formula:** `Contexto + orientação + benefício + próximo passo.`
> *Sua operação precisa de mais previsibilidade. A TOTVS ajuda a integrar dados,
> automatizar processos e acompanhar indicadores em tempo real. Vamos entender seu
> cenário e indicar o melhor caminho?*

**Person & naming:** First person plural — **"nós" / "a gente"**, or **"a TOTVS"**
(treated as a feminine noun: *a* TOTVS). Avoid first-person singular ("eu"). Never
"Grupo TOTVS" — the brand presents as a single company.

**Casing:** Sentence case for UI and body copy. The wordmark is uppercase (TOTVS).
Event/product lockups may use uppercase (UNIVERSO TOTVS 25). Avoid ALL-CAPS sentences.

**Tone scale:** mostly **leve / informal-institucional**. Prefer whole words in
institutional contexts ("para", not "pra"); contractions ("pra", "tá") are allowed in
social/casual channels only. **Never** chat-speak ("vc", "tbm", "td") and never overly
formal/rebuscado ("Prezados, vimos por meio desta…").

**Inclusion:** No gendered, ableist or excluding terms. Prefer "pessoa usuária" over
"usuário leigo"; "Que bom ter vocês aqui" over "Sejam bem-vindos". Translate jargon and
unnecessary English/acronyms to clear Portuguese ("unidades de negócio", not "BUs").

**Competitors:** Never name or attack them. Demonstrate own value instead.

**Emoji:** Support, not crutch. Sparse, in informal channels, complementing the
message — never replacing essential words, never ambiguous, never in clusters
(*"A inovação chegou para simplificar sua rotina 🚀"*, not *"🚀🚀🚀🔥"*).

**Proximity, not intimacy:** warm but professional — *"Olá, tudo bem? Vamos resolver
isso juntos."* not *"Fala aí, chefia!"*.

---

## VISUAL FOUNDATIONS

**Color** — "vibrant, digital, diverse." A **dark-navy + cyan** core carries the brand
(≈55–70% of any composition), **white** frames and breathes (15–20%), **purple** is the
secondary accent, and four tertiary brights (green, lime, orange, pink) appear
occasionally (10–15%) as strategic pops.
- Primary: Azul Escuro `#002233`, Azul (cyan) `#00DBFF`, Branco `#FFFFFF`.
- Secondary: Roxo `#A44DFF`.
- Tertiary: Verde `#00FFD4`, Limão `#D9FF65`, Laranja `#FF8900`, Rosa `#FF009E`.
- **Gradients** are a real brand device — two-stop blends across adjacent brights
  (cyan→purple, purple→orange, pink→lime, green→cyan) used on hero washes and the
  *grafismo*. Tokens: `--grad-*`.
- Cyan is bright: text **on cyan is the dark navy**, not white.

**Typography** — Display/institutional is the official proprietary **TOTVS** typeface
(geometric grotesque, ExtraLight→ExtraBold), installed as webfonts in `tokens/fonts.css`
(`assets/fonts/TOTVS-*.ttf`). Text/system font is **Verdana / Verdana Bold** exactly as
the manual specifies (websafe).
Headlines are tight (`letter-spacing: -0.02em`), bold/extrabold, sentence case.
Body is Verdana at comfortable line-height (1.5).

**Backgrounds** — Three modes: (1) light wash (`--grey-50`) for institutional/UI,
(2) deep navy (`--totvs-dark`) for impact and "trusted advisor" moments, (3) saturated
color/gradient blocks for campaigns. Full-bleed brand **photography** (warm, human,
real Brazilian people and workplaces, natural light, slight low-angle "hero"
perspective) often pairs with a navy or color overlay and the *grafismo*. Photography
in this repo is represented by image slots / placeholders to avoid shipping licensed
stock.

**The "O" grafismo** — the brand's hero graphic is a 3D render of the symbol's rounded
hexagon ring (a "wedding-band" loop), in cyan, blue, teal or navy. Official transparent
PNGs live in `assets/grafismo/`. Use it large, confident, cropped off-canvas as a single
gesture — never a busy pattern. The faint CSS radial rings in some specimens are only a
lightweight ambient fallback.

**Corner radii** — soft and rounded, echoing the symbol and the rounded icon
terminals. Cards 12–16px, large surfaces 24–32px, pills for tags/chips.

**Cards** — white surface, 1px `--border-subtle` OR a soft navy-tinted shadow
(`--shadow-sm`/`--shadow-md`) — not both heavily. No colored left-border accents.
12–16px radius, generous padding (24px).

**Borders & dividers** — hairline `--border-subtle` (#e1e6e9) on light; `--navy-600`
on dark. Focus is a 3px cyan ring (`--focus-ring`).

**Shadows** — cool, **navy-tinted** (rgba(0,34,51,…)), soft and diffuse — never pure
black, never harsh. A cyan glow (`--shadow-cyan`) is reserved for brand emphasis on
dark surfaces.

**Motion** — brisk and purposeful (dinâmico): 120–280ms, gentle `ease-out`
(`--ease-standard`). Fades and short slides; **no** bouncy springs on institutional UI.
Respect `prefers-reduced-motion`.

**Hover / press** — Hover: lighten cyan one step / darken navy one step, optional 1px
lift. Press: darker tone + 1px translate down, lift removed. Disabled: 40% opacity, no
shadow. Touch targets ≥ 44px.

**Transparency & blur** — sparingly: color/navy overlays on photography, and the
occasional frosted panel over imagery. Not a glassmorphism-heavy system.

---

## ICONOGRAPHY

TOTVS uses a **proprietary line-icon set**: simple, synthetic shapes drawn on a grid
with a **thin, even stroke**, **rounded terminals/caps** that echo the typography's
curved finishes, and a one-color application (positive on light, negative on dark, often
drawn in **cyan**). The official library covers the segments TOTVS serves (agro,
logística, manufatura, varejo, serviços, educação, saúde, jurídico, financeiro…) plus
Data/Analytics, Dev, Contato, Multimídia/Segurança and Diversos. Reference sheets are in
`assets/icons/` (`totvs-icons-segmentos.png`, `totvs-icons-data.png`,
`totvs-icons-dev-diversos.png`). When illustrating the segments TOTVS serves, always use
the official segment icons.

Because the official icon font isn't shipped here, this system substitutes **Phosphor
Icons** (`regular` weight) via CDN — its thin even stroke and rounded caps are the
closest public match to the real set. Swap for the official TOTVS icon assets when
available.

```html
<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
<i class="ph ph-receipt" style="font-size:24px;color:var(--totvs-dark)"></i>
```

- Icons render in a single color: `--totvs-dark` on light, `--totvs-white` on dark,
  occasionally `--totvs-cyan`/`--totvs-purple` for accent.
- **Emoji**: only in informal channels, sparingly (see CONTENT FUNDAMENTALS). Not used
  as UI iconography.
- No multicolor/3D icons. Keep them flat, single-weight, single-color.

---

## INDEX / manifest

Root:
- `styles.css` — global entry (import this). `@import`s all token files.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css`
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

Assets (`assets/`):
- `totvs-logo.svg` / `.png` + `totvs-logo-white.svg` / `.png` — **official** full lockup.
- `totvs-symbol.svg` / `.png` + white variants — symbol only (restricted use).
- `grafismo/` — **official 3D "O" grafismo** renders (transparent PNG): `grafismo-capa`
  (the cropped cover composition), `grafismo-cyan`, `grafismo-teal`, `grafismo-navy`,
  `grafismo-blue`. The brand's hero graphic device. `grafismo/hex/hex-00…15.png` is a
  16-frame 3D rotation sequence of the ring (drives the animated Brand specimen card).
- `icons/` — official thin-line icon reference sheets: `totvs-icons-segmentos.png`,
  `totvs-icons-data.png`, `totvs-icons-dev-diversos.png`.
- `templates/` — official source files for reference & download:
  `TOTVS-apresentacao-2025.pdf` (32-slide deck template),
  `TOTVS-papel-timbrado-2025.pdf` (letterhead).
  The Google-Docs cover template remains in `uploads/USO_PÚBLICO_COM_CAPA_Google Docs_2025.pdf`
  (its filename couldn't be copied programmatically — open it from there).

Foundations (Design System tab — `01-fundamentos/`): color, type, spacing, brand cards.

Components (`components/`) — mount via `window.TOTVSDesignSystem_be3538`:
- `core/` — Button, Badge, Card, Avatar.
- `forms/` — Input, Checkbox, Switch.
- `feedback/` — Alert, ProgressBar.
- `navigation/` — Tabs.
Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a directory `@dsCard`.

UI kit (`05-ui-kits/`):
- `gestao/` — a recreation of a TOTVS-style management/ERP product surface
  (login, dashboard with KPIs/chart/goals/table, pedidos with tabs + detail).
  `index.html` is the interactive entry; `shell.jsx` + `screens.jsx` hold the views.

Templates (`templates/`) — reusable starting points for consuming projects:
- `apresentacao/` — **Apresentação TOTVS**, an on-brand 16:9 deck starter
  (capa, conteúdo, encerramento) as a Design Component (`Apresentacao.dc.html`).

Slides (`03-slides/`): 9 sample on-brand layouts mirroring the official 32-slide deck
template — capa, divisória de seção, agenda, conteúdo + tópicos, boxes comparativos,
big numbers, fundo colorido, frase de impacto, encerramento. Share `03-slides/slide.css`.

> Namespace for component mounting in cards: `window.TOTVSDesignSystem_be3538`.
