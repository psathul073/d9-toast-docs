
# Examples

## Persistent Toast

```jsx
const id = showToast({
  message: "Loading...",
  type: "loading",
  duration: 0,
});

// later
removeToast(id);
```

## JSX Content

```jsx
showToast({
  message: (
    <>
      <strong>Custom JSX</strong>
      <p>This supports React nodes</p>
    </>
  ),
});
```