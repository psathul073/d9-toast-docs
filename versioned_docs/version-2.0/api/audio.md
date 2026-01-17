
# Audio Support

D9 Toast supports optional toast sounds with cooldown control.

## Audio Options

```ts
audio?: {
  enabled?: boolean;
  volume?: number; // 0 – 1
  audioFile?: string;
  cooldown?: number; // ms
};

```
### Example

```jsx
toast.success("Message sent", {
  audio: {
    enabled: true,
    volume: 0.8,
    audioFile: toast.sounds.success,
  },
});
```

✔ Per-toast control
✔ Cooldown prevents spam
✔ Custom sound support
