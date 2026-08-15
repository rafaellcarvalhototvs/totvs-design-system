const { useState } = React;

/**
 * TOTVS Tabs — underline-style segmented navigation. Active tab shows a cyan
 * underline and navy label.
 */
export function Tabs({ tabs = [], value, onChange, ...rest }) {
  const [internal, setInternal] = useState(tabs[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = (id) => { setInternal(id); onChange && onChange(id); };

  const bar = {
    display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid var(--border-subtle)',
    fontFamily: 'var(--font-display)',
  };
  return (
    <div style={bar} role="tablist" {...rest}>
      {tabs.map(t => {
        const on = t.id === active;
        return (
          <button key={t.id} role="tab" aria-selected={on} onClick={() => select(t.id)} style={{
            border: 'none', background: 'transparent', cursor: 'pointer',
            padding: '0 0 12px', position: 'relative',
            fontFamily: 'var(--font-display)', fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-semibold)',
            fontSize: 'var(--fs-body)', color: on ? 'var(--text-strong)' : 'var(--text-muted)',
            transition: 'var(--transition-base)', display: 'inline-flex', alignItems: 'center', gap: 7,
          }}>
            {t.icon}
            {t.label}
            {t.badge != null && (
              <span style={{ fontSize: 11, fontWeight: 700, background: on ? 'var(--cyan-soft)' : 'var(--grey-100)',
                color: on ? 'var(--cyan-700)' : 'var(--text-muted)', borderRadius: 'var(--radius-pill)',
                padding: '1px 7px' }}>{t.badge}</span>
            )}
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 3,
              borderRadius: '3px 3px 0 0', background: on ? 'var(--totvs-cyan)' : 'transparent',
              transition: 'var(--transition-base)' }} />
          </button>
        );
      })}
    </div>
  );
}
