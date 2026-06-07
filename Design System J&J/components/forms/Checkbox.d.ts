import * as React from 'react';

/** Custom-styled checkbox with label, brand green when checked. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
