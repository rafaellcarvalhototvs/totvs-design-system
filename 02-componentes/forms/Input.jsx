const { useState } = React;

/**
 * TOTVS Input — labelled text field with focus ring, optional icon & hint/error.
 */
export function Input({
  label, value, onChange, placeholder = '', type = 'text', hint = '', error = '',
  iconLeft = null, disabled = false, id, ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  const invalid = !!error;

  const wrap = { display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-text)' };
  const lbl = {
    fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)',
    fontSize: 'var(--fs-body-sm)', color: 'var(--text-strong)',
  };
  const box = {
    display: 'flex', alignItems: 'center', gap: '8px',
    height: 'var(--control-md)', padding: '0 14px',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
    border: `1px solid ${invalid ? 'var(--status-danger)' : (focus ? 'var(--border-focus)' : 'var(--border-strong)')}`,
    borderRadius: 'var(--radius-md)',
    boxShadow: focus && !invalid ? 'var(--focus-ring)' : 'none',
    transition: 'var(--transition-base)', boxSizing: 'border-box',
    opacity: disabled ? 0.6 : 1,
  };
  const input = {
    border: 'none', outline: 'none', background: 'transparent', flex: 1,
    fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body)', color: 'var(--text-strong)',
    minWidth: 0,
  };
  const msg = { fontSize: 'var(--fs-caption)', color: invalid ? 'var(--status-danger)' : 'var(--text-muted)' };

  return (
    <div style={wrap}>
      {label && <label htmlFor={fieldId} style={lbl}>{label}</label>}
      <div style={box}>
        {iconLeft && <span style={{ color: 'var(--text-muted)', display: 'inline-flex' }}>{iconLeft}</span>}
        <input
          id={fieldId} type={type} value={value} onChange={onChange} placeholder={placeholder}
          disabled={disabled} style={input}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}
        />
      </div>
      {(hint || error) && <span style={msg}>{error || hint}</span>}
    </div>
  );
}
