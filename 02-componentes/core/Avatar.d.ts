import * as React from 'react';

export interface AvatarProps {
  /** Full name — initials are derived from the first two words. */
  name?: string;
  /** Image URL; falls back to initials when absent. */
  src?: string | null;
  /** Pixel diameter. Default 40. */
  size?: number;
  /** Cyan focus-style ring. */
  ring?: boolean;
  /** Initials background tone. Default 'cyan'. */
  tone?: 'cyan' | 'purple' | 'navy' | 'lime';
}

/** Circular user avatar with image or derived initials. */
export function Avatar(props: AvatarProps): JSX.Element;
