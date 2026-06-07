FAQ accordion — answers the "how long / how much / who owns it" worries buyers won't ask aloud.

```jsx
<Accordion defaultOpen={[0]} items={[
  { q: 'How long does a site take?', a: 'Most small-business sites go live in 2–4 weeks.' },
  { q: 'Who owns the website?', a: 'You do — completely. It is yours to keep.' },
]} />
```

Props: `items` (`{q, a}[]`), `allowMultiple`, `defaultOpen` (indices). One panel open at a time unless `allowMultiple`.
