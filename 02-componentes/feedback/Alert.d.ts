import * as React from 'react';

export interface AlertProps {
  children?: React.ReactNode;
  title?: string;
  /** Semantic tone. Default 'info'. */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Leading icon node (e.g. a Phosphor <i>). */
  icon?: React.ReactNode;
  /** Show a close button; receives the click handler. */
  onClose?: (() => void) | null;
}

/** Inline message banner with soft tinted fill. */
export function Alert(props: AlertProps): JSX.Element;
