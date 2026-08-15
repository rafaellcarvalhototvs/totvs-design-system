/**
 * TOTVS ProgressBar — slim track, cyan or gradient fill.
 */
export function ProgressBar({ value = 0, max = 100, tone = 'cyan', showLabel = false, height = 8, ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const fills = {
    cyan: 'var(--totvs-cyan)',
    navy: 'var(--totvs-dark)',
    gradient: 'var(--grad-cyan-purple)',
  };
  const track = {
    width: '100%', height, background: 'var(--grey-200)',
    borderRadius: 'var(--radius-pill)', overflow: 'hidden',
  };
  const fill = {
    width: `${pct}%`, height: '100%', background: fills[tone] || fills.cyan,
    borderRadius: 'var(--radius-pill)', transition: 'width var(--dur-slow) var(--ease-standard)',
  };
  return (
    <div {...rest}>
      <div role="progressbar" aria-valuenow={value} aria-valuemax={max} style={track}>
        <div style={fill} />
      </div>
      {showLabel && (
        <div style={{ marginTop: 6, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)',
          fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{Math.round(pct)}%</div>
      )}
    </div>
  );
}
