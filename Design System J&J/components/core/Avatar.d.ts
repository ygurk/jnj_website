import * as React from 'react';

/** Round person/business avatar with initials fallback. */
export interface AvatarProps {
  src?: string;
  /** Used for alt text and initials fallback. */
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Avatar(props: AvatarProps): JSX.Element;
