Styled dropdown for short, known option sets (budget range, service type…).

```jsx
<Select label="What do you need?" placeholder="Choose one"
  options={['New website', 'Redesign', 'Just a refresh', 'Not sure yet']} />
```

Pass `options` as strings or `{value,label}` objects. Props: `label`, `hint`, `error`, `placeholder`, plus native `<select>` attributes.
