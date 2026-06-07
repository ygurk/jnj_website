import * as React from 'react';

interface AccordionItem { q: React.ReactNode; a: React.ReactNode; }

/**
 * Expandable FAQ list — a key trust signal that answers buyers' quiet fears.
 * @startingPoint section="Content" subtitle="FAQ accordion, single or multi-open" viewport="700x360"
 */
export interface AccordionProps {
  items: AccordionItem[];
  /** Allow more than one panel open at once. Default false. */
  allowMultiple?: boolean;
  /** Indices open on first render. */
  defaultOpen?: number[];
}

export function Accordion(props: AccordionProps): JSX.Element;
