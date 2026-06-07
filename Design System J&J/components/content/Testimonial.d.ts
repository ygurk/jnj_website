import * as React from 'react';

/**
 * Client testimonial card — quote + real name, business & face. The single
 * strongest "others trusted them" trust signal.
 * @startingPoint section="Content" subtitle="Testimonial card with rating, quote, avatar" viewport="700x300"
 */
export interface TestimonialProps {
  quote: string;
  name: string;
  business?: string;
  photo?: string;
  /** 0–5 star rating; 0 hides the stars. */
  rating?: number;
  /** Larger, on a soft brand surface — for the hero testimonial. */
  featured?: boolean;
}

export function Testimonial(props: TestimonialProps): JSX.Element;
