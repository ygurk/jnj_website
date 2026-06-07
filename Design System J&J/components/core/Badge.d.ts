import * as React from 'react';

/** Small status / category label. */
export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  /** Show a leading status dot. */
  dot?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
