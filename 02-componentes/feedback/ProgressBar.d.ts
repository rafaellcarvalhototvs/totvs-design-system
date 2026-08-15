import * as React from 'react';

export interface ProgressBarProps {
  /** Current value. */
  value?: number;
  /** Max value. Default 100. */
  max?: number;
  /** Fill style. Default 'cyan'. */
  tone?: 'cyan' | 'navy' | 'gradient';
  showLabel?: boolean;
  /** Track height in px. Default 8. */
  height?: number;
}

/** Slim determinate progress track with cyan or gradient fill. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
