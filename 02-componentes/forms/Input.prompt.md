Labelled single-line text field with a cyan focus ring and hint/error states.

```jsx
<Input label="E-mail corporativo" value={v} onChange={e=>set(e.target.value)}
       placeholder="voce@empresa.com.br" hint="A gente nunca compartilha seus dados." />
<Input label="CNPJ" error="Informe um CNPJ válido." value={v} onChange={...} />
```

Props: `label`, `hint`, `error` (red state, overrides hint), `iconLeft`, `type`, `disabled`. Label uses the display font; field text is Verdana. 12px radius, 44px tall.
