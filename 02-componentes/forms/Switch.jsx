const { useState } = React;

/**
 * TOTVS Switch — accessible toggle. On = cyan track, dark knob.
 */
export function Switch({ checked = false, onChange, label = '', disabled = false, id, ...rest }) {
  const fieldId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  const track = {
    position: 'relative', width: 44, height: 26, borderRadius: 'var(--radius-pill)',
    background: checked ? 'var(--totvs-cyan)' : 'var(--grey-300)',
    transition: 'var(--transition-base)', flex: '0 0 auto',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };
  const knob = {
    position: 'absolute', top: 3, left: checked ? 21 : 3, width: 20, height: 20,
    borderRadius: '50%', background: checked ? 'var(--totvs-dark)' : 'var(--surface-card)',
    boxShadow: 'var(--shadow-sm)', transition: 'var(--transition-base)',
  };
  const wrap = {
    display: 'inline-flex', alignItems: 'center', gap: '10px',
    fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body)', color: 'var(--text-strong)',
    opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer', userSelect: 'none',
  };
  return (
    <label htmlFor={fieldId} style={wrap}>
      <span role="switch" aria-checked={checked} style={track}
        onClick={() => !disabled && onChange && onChange(!checked)}>
        <span style={knob} />
      </span>
      <input id={fieldId} type="checkbox" checked={checked} disabled={disabled}
        onChange={e => onChange && onChange(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
