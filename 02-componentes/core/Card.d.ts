import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Inner padding. Default 'md' (24px). */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Elevation. 'none' uses a hairline border instead of shadow. Default 'sm'. */
  elevation?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  /** Adds hover-lift + pointer; use for clickable cards. */
  interactive?: boolean;
  /** Optional top accent bar color (e.g. var(--totvs-cyan)). Use sparingly. */
  accent?: string;
  style?: React.CSSProperties;
}

/**
 * Container surface — white, soft navy-tinted elevation, 16px radius.
 * @startingPoint section="Core" subtitle="Surface card with soft elevation" viewport="700x150"
 */
export function Card(props: CardProps): JSX.Element;
