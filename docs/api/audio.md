
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
const { sounds, showToast } = useToast();

showToast({
  message: "Message sent",
  type: "success",
  audio: {
    enabled: true,
    volume: 0.8,
    cooldown: 500,
    audioFile: sounds.success,
  },
});
```

✔ Prevents sound spam
✔ Per-toast control
✔ Custom audio file supported

