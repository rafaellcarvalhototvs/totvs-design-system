# TOTVS Design System — contexto para o Gemini

Este repositório é a fonte de verdade visual e técnica do TOTVS Design System.
Ele é um catálogo estático, não um aplicativo com runtime de Node, Vite ou Next.

## Ordem de consulta

1. Leia `ai/design-system-index.json` para descobrir os artefatos disponíveis.
2. Consulte `_ds_manifest.json` antes de criar ou substituir componentes.
3. Use os tokens em `tokens/*.css` em vez de inventar valores.
4. Consulte o `.prompt.md`, o `.d.ts` e o `.jsx` do componente antes de usá-lo.
5. Use os exemplos em `01-fundamentos/`, `03-slides/` e `05-ui-kits/` como referência visual.

## Regras de implementação

- Reutilize componentes existentes em `02-componentes/`.
- Não crie uma segunda versão de Button, Card, Input ou outro componente já existente.
- Preserve a paleta, tipografia, espaçamento, elevação, raios e grafismo TOTVS.
- Display e títulos usam a família `TOTVS`; texto corrido usa Verdana.
- Use `#002233` como navy principal e `#00DBFF` como cyan principal.
- Prefira o ritmo de 8pt e os tokens `--space-*`, `--radius-*`, `--shadow-*` e `--fs-*`.
- Use no máximo uma ação primária/cyan por vista, salvo justificativa de fluxo.
- Não invente regras de marca. Se faltar uma regra, sinalize a lacuna.
- Diferencie claramente o que é regra oficial e o que é composição demonstrativa do UI Kit.

## Componentes disponíveis

Avatar, Badge, Button, Card, Alert, ProgressBar, Checkbox, Input, Switch e Tabs.
As APIs estão nos arquivos `.d.ts` e os exemplos de intenção de uso estão nos arquivos `.prompt.md`.

## URLs publicadas

- Catálogo visual: https://totvs-design-system-f0e57812.vercel.app/
- Índice: https://totvs-design-system-f0e57812.vercel.app/ai/design-system-index.json
- Manifesto: https://totvs-design-system-f0e57812.vercel.app/_ds_manifest.json

Ao responder sobre uma decisão visual, cite o caminho do arquivo consultado.
Ao implementar, explique quais tokens e componentes foram reutilizados.
