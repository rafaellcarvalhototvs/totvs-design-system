import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** Semantic tone. Default 'neutral'. */
  tone?: 'neutral' | 'cyan' | 'purple' | 'success' | 'warning' | 'danger';
  /** 'soft' tinted fill (default) or 'solid'. */
  emphasis?: 'soft' | 'solid';
  /** Leading status dot. */
  dot?: boolean;
}

/** Small status/label pill for states, counts, and categories. */
export function Badge(props: BadgeProps): JSX.Element;
