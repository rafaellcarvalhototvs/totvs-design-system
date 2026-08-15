/**
 * TOTVS Badge — small status/label pill.
 * Tones map onto the brand palette; 'solid' or 'soft' emphasis.
 */
export function Badge({ children, tone = 'neutral', emphasis = 'soft', dot = false, ...rest }) {
  const tones = {
    neutral: { soft: ['var(--grey-100)', 'var(--text-body)'], solid: ['var(--totvs-dark)', '#fff'] },
    cyan:    { soft: ['var(--cyan-soft)', 'var(--cyan-700)'], solid: ['var(--totvs-cyan)', 'var(--totvs-dark)'] },
    purple:  { soft: ['var(--purple-soft)', 'var(--purple-700)'], solid: ['var(--totvs-purple)', '#fff'] },
    success: { soft: ['var(--status-success-soft)', 'var(--status-success)'], solid: ['var(--status-success)', '#fff'] },
    warning: { soft: ['var(--status-warning-soft)', '#9a5300'], solid: ['var(--totvs-orange)', 'var(--totvs-dark)'] },
    danger:  { soft: ['var(--status-danger-soft)', 'var(--status-danger)'], solid: ['var(--status-danger)', '#fff'] },
  };
  const [bg, color] = (tones[tone] || tones.neutral)[emphasis] || tones.neutral.soft;

  const style = {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    padding: '3px 10px', background: bg, color,
    fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)',
    fontSize: 'var(--fs-caption)', lineHeight: 1.4, letterSpacing: '0.01em',
    borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap', boxSizing: 'border-box',
  };
  return (
    <span style={style} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flex: '0 0 auto' }} />}
      {children}
    </span>
  );
}
