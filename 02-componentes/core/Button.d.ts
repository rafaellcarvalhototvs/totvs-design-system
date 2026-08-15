import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. Default 'primary'. */
  variant?: 'primary' | 'cyan' | 'secondary' | 'ghost';
  /** Default 'md'. All sizes keep a ≥44px touch target at md/lg. */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Primary action control for TOTVS interfaces. Pill-shaped, display font, bold.
 * @startingPoint section="Core" subtitle="Pill buttons — primary, cyan, secondary, ghost" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
