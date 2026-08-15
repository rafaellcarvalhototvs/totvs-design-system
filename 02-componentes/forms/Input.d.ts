import * as React from 'react';

export interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and overrides hint. */
  error?: string;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

/**
 * Labelled text field with cyan focus ring and hint/error states.
 * @startingPoint section="Forms" subtitle="Text field with label, hint & error" viewport="700x150"
 */
export function Input(props: InputProps): JSX.Element;
