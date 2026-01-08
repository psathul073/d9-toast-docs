
## useToast()

The `useToast` hook provides methods to show and manage toast notifications.

```ts
const {
  sounds,
  showToast,
  removeToast,
  removeToastAll,
} = useToast();

```
## Methods

| Method               | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| `sounds`             | Available sound presets ( `success`, `error`, `info`, `warning` ) |
| `showToast(options)` | Shows a toast and returns its `id`                              |
| `removeToast(id)`    | Removes a toast by ID                                           |
| `removeToastAll()`   | Clears all active toasts                                        |
