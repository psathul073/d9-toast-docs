
# Toast Options

## Core Options

| Option             | Type                                                                                               | Description                 |
| ------------------ | -------------------------------------------------------------------------------------------------- | --------------------------- |
| `message`          | `string \| ReactNode`                                                                              | Toast content               |
| `type`             | `"success" \| "error" \| "info" \| "warning" \| "loading" \| "submit"`                             | Visual type                 |
| `theme`            | `"light" \| "dark" \| "colored"`                                                                   | Theme                       |
| `position`         | `"top-right" \| top-left \| bottom-right \| bottom-left \| center \| center-top \| center-bottom"` | Placement                   |
| `duration`         | `number`                                                                                           | Auto close (0 = persistent) |
| `autoClose`        | `boolean`                                                                                          | Enable auto close           |
| `closable`         | `boolean`                                                                                          | Show close button           |
| `progress`         | `boolean`                                                                                          | Progress bar                |
| `title`            | `boolean`                                                                                          | Header/title                |
| `pauseOnHover`     | `boolean`                                                                                          | Pause on hover              |
| `pauseOnFocusLoss` | `boolean`                                                                                          | Pause on tab switch         |
| `rtl`              | `boolean`                                                                                          | RTL text support            |
| `expand`           | `boolean \| "hover"`                                                                               | Expand stacked toasts       |
| `className`        | `string`                                                                                           | Custom styles               |
