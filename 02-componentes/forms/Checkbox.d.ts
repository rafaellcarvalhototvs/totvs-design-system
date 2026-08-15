import * as React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
}

/** Square checkbox — cyan fill with a navy check when selected. */
export function Checkbox(props: CheckboxProps): JSX.Element;
