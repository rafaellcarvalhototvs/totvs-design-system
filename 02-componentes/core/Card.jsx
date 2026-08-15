/**
 * TOTVS Card — white surface, soft navy-tinted elevation OR hairline border.
 * Optional interactive hover-lift.
 */
const { useState } = React;

export function Card({
  children, padding = 'md', elevation = 'sm', interactive = false,
  accent = null, style = {}, ...rest
}) {
  const [hover, setHover] = useState(false);
  const pads = { none: '0', sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };
  const shadows = {
    none: 'none', xs: 'var(--shadow-xs)', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)',
  };
  const base = {
    background: 'var(--surface-card)',
    border: elevation === 'none' ? '1px solid var(--border-subtle)' : '1px solid transparent',
    borderRadius: 'var(--radius-lg)',
    padding: pads[padding] ?? pads.md,
    boxShadow: interactive && hover ? 'var(--shadow-md)' : (shadows[elevation] ?? shadows.sm),
    transform: interactive && hover ? 'var(--hover-lift)' : 'none',
    transition: 'var(--transition-base)',
    cursor: interactive ? 'pointer' : 'default',
    boxSizing: 'border-box',
    ...(accent ? { borderTop: `3px solid ${accent}` } : {}),
    ...style,
  };
  return (
    <div
      style={base}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      {...rest}
    >
      {children}
    </div>
  );
}
