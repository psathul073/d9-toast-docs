
# toast API

The `toast` used to show and manage toast notifications.

```ts
import { toast } from "d9-toast";

```
### Available Methods

| Method                                      | Description         |
| ------------------------------------------- | ------------------- |
| `toast(msg, options)`                       | Show default toast  |
| `toast.success(msg, options)`               | Show success toast  |
| `toast.error(msg, options)`                 | Show error toast    |
| `toast.info(msg, options)`                  | Show info toast     |
| `toast.warning(msg, options)`               | Show warning toast  |
| `toast.promise(promise, messages, options)` | Promise-based toast |
| `toast.dismiss(id)`                         | Remove toast        |
| `toast.dismissAll()`                        | Clear all toasts    |

---

> toast(message, options?)
```ts
toast("Simple notification");
```

> toast.success(message, options?)
```ts
toast.success("Profile updated");
```

> toast.error(message, options?)
```ts
toast.error("Something went wrong");
```

> toast.promise(promise, messages, options?)

```ts
toast.promise(
  fetch("/api/save"),
  {
    loading: "Saving...",
    success: "Saved!",
    error: "Failed",
  }
);
```

✔ Auto loading
✔ Auto resolve / reject
✔ Returns original promise