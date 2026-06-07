import * as React from 'react';

/**
 * Labelled text input with hint/error states and brand focus ring.
 * @startingPoint section="Forms" subtitle="Text field with label, hint, error & leading icon" viewport="700x140"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  /** When set, the field renders in its error state and shows this message. */
  error?: string;
  leadingIcon?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
