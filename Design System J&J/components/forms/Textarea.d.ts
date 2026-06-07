import * as React from 'react';

/** Multi-line text field, styled to match Input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Textarea(props: TextareaProps): JSX.Element;
