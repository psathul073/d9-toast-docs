import { useToast } from "d9-toast";
import { JSX } from "react";


export function UndoButton(): JSX.Element {

    const { showToast, removeToast } = useToast();


    return (
        <button
            style={{
                padding: "10px 16px",
                background: "#6366f1",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
            }}
            onClick={() => showToast({
                message: "Item deleted",
                type: "warning",
                actions: [
                    {
                        text: "Undo",
                        callback: ({ id }) => removeToast(id),
                    },
                ],
            })} >
            Show Toast
        </button>
    );
}


export function MultiButton(): JSX.Element {
    const { showToast, removeToast } = useToast();

    return (
        <button
            style={{
                padding: "10px 16px",
                background: "#6366f1",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
            }}
            onClick={() => showToast({
                message: "Unsaved changes",
                type: "info",
                actions: [
                    { text: "Save" },
                    { text: "Discard", className: "text-red-500" },
                ],
            })} >
            Show Toast
        </button>
    );
}