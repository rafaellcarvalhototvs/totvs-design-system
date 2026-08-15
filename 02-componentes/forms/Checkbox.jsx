const { useState } = React;

/**
 * TOTVS Checkbox — square, cyan when checked with a dark check.
 */
export function Checkbox({ checked = false, onChange, label = '', disabled = false, id, ...rest }) {
  const fieldId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  const box = {
    width: 20, height: 20, borderRadius: 'var(--radius-xs)', flex: '0 0 auto',
    border: `2px solid ${checked ? 'var(--totvs-cyan)' : 'var(--border-strong)'}`,
    background: checked ? 'var(--totvs-cyan)' : 'var(--surface-card)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    transition: 'var(--transition-base)', boxSizing: 'border-box',
  };
  const wrap = {
    display: 'inline-flex', alignItems: 'center', gap: '10px',
    fontFamily: 'var(--font-text)', fontSize: 'var(--fs-body)', color: 'var(--text-strong)',
    opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer', userSelect: 'none',
  };
  return (
    <label htmlFor={fieldId} style={wrap}>
      <span style={box} onClick={() => !disabled && onChange && onChange(!checked)}>
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="var(--totvs-dark)" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input id={fieldId} type="checkbox" checked={checked} disabled={disabled}
        onChange={e => onChange && onChange(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      {label}
    </label>
  );
}
