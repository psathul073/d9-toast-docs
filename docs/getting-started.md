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

## 2. Trigger toasts anywhere

```tsx
import { useToast } from "d9-toast";

function MyComponent() {
  const { showToast } = useToast();

  return (
    <button
      onClick={() =>
        showToast({
          message: "Saved successfully!",
          type: "success",
        })
      }
    >
      Show Toast
    </button>
  );
}
```

## 3. Import styles (required)

:::info

```
import "d9-toast/toast.css";
```

> ⚠️ Without importing the CSS, the toast will render without styles.

:::
