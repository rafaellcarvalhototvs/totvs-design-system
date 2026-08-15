/**
 * TOTVS Avatar — initials or image, circular, with optional brand-color ring.
 */
export function Avatar({ name = '', src = null, size = 40, ring = false, tone = 'cyan', ...rest }) {
  const tones = {
    cyan: ['var(--cyan-soft)', 'var(--cyan-700)'],
    purple: ['var(--purple-soft)', 'var(--purple-700)'],
    navy: ['var(--navy-700)', '#fff'],
    lime: ['var(--totvs-lime)', 'var(--totvs-dark)'],
  };
  const [bg, fg] = tones[tone] || tones.cyan;
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase() || '').join('');

  const style = {
    width: size, height: size, borderRadius: '50%', flex: '0 0 auto',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    background: src ? `center/cover no-repeat url(${src})` : bg, color: fg,
    fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)',
    fontSize: Math.round(size * 0.4), letterSpacing: '0.01em',
    boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 4px var(--totvs-cyan)' : 'none',
    boxSizing: 'border-box', overflow: 'hidden', userSelect: 'none',
  };
  return <div style={style} title={name} {...rest}>{!src && initials}</div>;
}
