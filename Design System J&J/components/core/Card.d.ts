import * as React from 'react';

/**
 * Default surface container — white on the cream page, hairline border + soft shadow.
 * @startingPoint section="Core" subtitle="Surface container with white / cream / brand / soft tones" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds hover lift for clickable cards. */
  interactive?: boolean;
  tone?: 'white' | 'cream' | 'brand' | 'soft';
  as?: keyof JSX.IntrinsicElements;
}

export function Card(props: CardProps): JSX.Element;
