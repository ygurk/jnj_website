import * as React from 'react';

interface SelectOption { value: string; label: string; }

/** Native select styled to match the form fields, with chevron. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  hint?: string;
  error?: string;
  placeholder?: string;
  /** Options as strings or {value,label} objects. */
  options?: Array<string | SelectOption>;
  children?: React.ReactNode;
}

export function Select(props: SelectProps): JSX.Element;
