Labelled text field for contact and lead forms.

```jsx
<Input label="Your name" placeholder="Jane Smith" required />
<Input label="Email" type="email" hint="We reply within a day." />
<Input label="Phone" error="Please enter a valid number." />
```

Props: `label`, `hint`, `error` (sets error state), `leadingIcon`, plus any native `<input>` attribute (`type`, `placeholder`, `value`, `onChange`…).
