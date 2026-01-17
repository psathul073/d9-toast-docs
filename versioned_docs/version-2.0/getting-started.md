# Getting Started

## 1. Wrap your app with ToastProvider

```tsx
import { ToastProvider } from "d9-toast";
import "d9-toast/toast.css";

export default function Root() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}
```

:::warning
Required **once** at app root
:::

## 2. Trigger toasts anywhere

```tsx
import { toast } from "d9-toast";

function MyComponent() {
  return (
    <button onClick={() => toast.success("Saved successfully!")}>
      Show Toast
    </button>
  );
}
```
✅ Works inside

* components
* utils
* services
* async functions

## 3. Import styles (required)

:::info

```
import "d9-toast/toast.css";
```

> ⚠️ Without importing the CSS, the toast will render without styles.

:::
