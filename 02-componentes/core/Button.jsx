const { useState } = React;

/**
 * TOTVS Button
 * Variants: primary (navy), cyan (brand accent), secondary (outline), ghost.
 * Hover lightens/darkens one ramp step + 1px lift; press translates down.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const sizes = {
    sm: { h: 'var(--control-sm)', px: '14px', fs: '13px', gap: '6px' },
    md: { h: 'var(--control-md)', px: '20px', fs: '15px', gap: '8px' },
    lg: { h: 'var(--control-lg)', px: '26px', fs: '16px', gap: '10px' },
  };
  const s = sizes[size] || sizes.md;

  const palette = {
    primary: {
      bg: 'var(--action-primary)', bgHover: 'var(--action-primary-hover)',
      bgPress: 'var(--action-primary-press)', color: 'var(--totvs-white)', border: 'transparent',
    },
    cyan: {
      bg: 'var(--action-cyan)', bgHover: 'var(--action-cyan-hover)',
      bgPress: 'var(--action-cyan-press)', color: 'var(--totvs-dark)', border: 'transparent',
    },
    secondary: {
      bg: 'transparent', bgHover: 'var(--surface-sunken)',
      bgPress: 'var(--grey-200)', color: 'var(--text-strong)', border: 'var(--border-strong)',
    },
    ghost: {
      bg: 'transparent', bgHover: 'var(--surface-sunken)',
      bgPress: 'var(--grey-200)', color: 'var(--text-strong)', border: 'transparent',
    },
  };
  const p = palette[variant] || palette.primary;

  const style = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
    height: s.h, padding: `0 ${s.px}`, width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: s.fs,
    letterSpacing: '0.005em', lineHeight: 1, whiteSpace: 'nowrap',
    background: disabled ? p.bg : (active ? p.bgPress : (hover ? p.bgHover : p.bg)),
    color: p.color,
    border: `${p.border === 'transparent' ? 1 : 'var(--border-width-thick)'}px solid ${p.border}`,
    borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    boxShadow: (variant === 'primary' || variant === 'cyan') && hover && !disabled && !active ? 'var(--shadow-sm)' : 'none',
    transform: !disabled && active ? 'var(--press-translate)' : 'none',
    transition: 'var(--transition-base)', outline: 'none', boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
  };

  return (
    <button
      type={type} style={style} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
