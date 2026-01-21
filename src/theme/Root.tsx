import React from "react";
import type { Props } from "@theme/Root";
import { ToastProvider } from "d9-toast";
import "../css/toast.css";

export default function Root({ children }: Props) {
    return <ToastProvider>{children}</ToastProvider>;
}
