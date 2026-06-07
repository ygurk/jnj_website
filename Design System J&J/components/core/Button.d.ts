import * as React from 'react';

/**
 * Primary action button for J&J Studios interfaces.
 * @startingPoint section="Core" subtitle="Brand button with accent CTA, primary, secondary & ghost variants" viewport="700x220"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual emphasis. `accent` (gold) is the single hero CTA; `primary` (pine) is the default. */
  variant?: 'accent' | 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Render as a link instead of a button. */
  as?: 'button' | 'a';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps): JSX.Element;
