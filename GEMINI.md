# TOTVS Slide Design System — contexto para o Gemini

Este repositório é principalmente a fonte de verdade visual para criar slides TOTVS.
O objetivo central é reproduzir a linguagem das apresentações em `03-slides/`, não
apenas reutilizar componentes de interface. Ele é um catálogo estático, não um
aplicativo com runtime de Node, Vite ou Next.

## Ordem de consulta

1. Leia `ai/design-system-index.json` para descobrir a família de slide adequada.
2. Consulte `_ds_manifest.json` para localizar exemplos de `03-slides/`.
3. Leia `03-slides/slide.css` e pelo menos um slide de referência da mesma família.
4. Use os tokens em `tokens/*.css` e os assets em `assets/` em vez de inventar valores.
5. Consulte `01-fundamentos/` para validar a regra de marca por trás da composição.
6. Use `02-componentes/` apenas como suporte para elementos repetidos de UI.

## Prioridade: estilo de apresentações

- Todos os slides devem partir do frame `1280x720` e importar `03-slides/slide.css`.
- Preserve o sistema de `pagemark`, número de página, logo, padding e hierarquia tipográfica.
- Escolha primeiro uma família: capa/agenda, conteúdo, diagramas/dados ou fundo/fechamento.
- Reutilize a composição de um slide existente antes de propor uma nova composição.
- O grafismo 3D "O" é um elemento de composição oficial; use os arquivos em `assets/grafismo/`.
- Em slides, a tipografia está escopada para Verdana em `slide.css`; não aplique automaticamente a regra de display TOTVS dos componentes.
- Preserve contraste, áreas de respiro, recortes grandes, painéis, tabelas e gráficos conforme os exemplos.
- Não transforme um slide em dashboard ou página web sem pedido explícito.

## Famílias de slide

- `03-slides/01-capa-*` e `03-slides/02-abertura-*`: capas, aberturas e divisórias.
- `03-slides/03-agenda-*`: agendas e organização de sessão.
- `03-slides/04-conteudo-*` e `03-slides/05-destaque-*`: conteúdo, tópicos, imagens e destaques.
- `03-slides/06-processo-*` e `03-slides/07-dados-*`: processos, timelines, tabelas e gráficos.
- `03-slides/08-fundo-*` e `03-slides/09-fechamento-*`: fundos de impacto e encerramento.

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

## Componentes de suporte disponíveis

Avatar, Badge, Button, Card, Alert, ProgressBar, Checkbox, Input, Switch e Tabs.
As APIs estão nos arquivos `.d.ts` e os exemplos de intenção de uso estão nos arquivos `.prompt.md`.

## URLs publicadas

- Catálogo visual: https://totvs-design-system-f0e57812.vercel.app/
- Índice: https://totvs-design-system-f0e57812.vercel.app/ai/design-system-index.json
- Manifesto: https://totvs-design-system-f0e57812.vercel.app/_ds_manifest.json

Ao responder sobre uma decisão visual, cite o slide de referência e o caminho do arquivo consultado.
Ao implementar, explique qual família de slide, composição, tokens e assets foram reutilizados.
