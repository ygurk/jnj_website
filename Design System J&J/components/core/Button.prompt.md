Brand button — use `accent` (gold) for the one hero call-to-action on a view, `primary` (pine green) for normal actions, `secondary` for lower-emphasis siblings, `ghost` for tertiary/inline.

```jsx
<Button variant="accent" size="lg">Book a free chat</Button>
<Button variant="primary">See our work</Button>
<Button variant="secondary">Learn more</Button>
<Button variant="ghost" iconRight={<span>→</span>}>Skip</Button>
```

Variants: `accent | primary | secondary | ghost`. Sizes: `sm | md | lg`. Set `as="a"` + `href` for links, `fullWidth` for mobile/forms, `iconLeft`/`iconRight` for icons. Rule of thumb: at most one `accent` button visible at a time.
