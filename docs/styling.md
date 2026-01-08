
# Styling

## Default Styles (Required)

```ts
import "d9-toast/toast.css";
```

## Tailwind / Custom Styling

```jsx
showToast({
  message: "Styled Toast",
  className:
    "!bg-gradient-to-r from-indigo-600 to-purple-600 !text-white !rounded-xl",
});
```
:::warning
Use `!important` when overriding styles with Tailwind.
::::