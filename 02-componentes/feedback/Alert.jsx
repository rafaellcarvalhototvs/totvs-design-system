/**
 * TOTVS Alert — inline message banner. Soft tinted fill, navy text, rounded.
 * Tone-driven; pass an icon (e.g. Phosphor) for the leading glyph.
 */
export function Alert({ children, title = '', tone = 'info', icon = null, onClose = null, ...rest }) {
  const tones = {
    info:    ['var(--status-info-soft)', 'var(--cyan-700)'],
    success: ['var(--status-success-soft)', 'var(--status-success)'],
    warning: ['var(--status-warning-soft)', '#9a5300'],
    danger:  ['var(--status-danger-soft)', 'var(--status-danger)'],
  };
  const [bg, accent] = tones[tone] || tones.info;
  const wrap = {
    display: 'flex', gap: '12px', alignItems: 'flex-start',
    padding: 'var(--space-4)', background: bg, borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-text)', boxSizing: 'border-box',
  };
  return (
    <div role="status" style={wrap} {...rest}>
      {icon && <span style={{ color: accent, fontSize: 20, display: 'inline-flex', flex: '0 0 auto', marginTop: 1 }}>{icon}</span>}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)',
            fontSize: 'var(--fs-body)', color: 'var(--text-strong)', marginBottom: children ? 2 : 0 }}>{title}</div>
        )}
        {children && (
          <div style={{ fontSize: 'var(--fs-body-sm)', lineHeight: 1.5, color: 'var(--text-body)' }}>{children}</div>
        )}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Fechar" style={{
          border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)',
          fontSize: 18, lineHeight: 1, padding: 2, flex: '0 0 auto' }}>×</button>
      )}
    </div>
  );
}
