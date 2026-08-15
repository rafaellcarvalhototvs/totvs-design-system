import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
}

/** Binary toggle — cyan track when on, navy knob. */
export function Switch(props: SwitchProps): JSX.Element;
