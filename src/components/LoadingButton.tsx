import { useToast } from "d9-toast";
import { JSX } from "react";


export function Uploading(): JSX.Element {
    const { showToast, removeToast } = useToast();

    function upload() {
        const id = showToast({
            message: "Uploading file...",
            type: "submit",
            duration: 0,
        });

        setTimeout(() => {
            removeToast(id);
            showToast({
                message: "Upload complete",
                type: "success",
            });
        }, 3000);

    }

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
            onClick={upload} >
            Upload
        </button>
    );
}

export function Updating(): JSX.Element {
    const { showToast, removeToast } = useToast();

    function upload() {
        const id = showToast({
            message: "Updating file...",
            type: "loading",
            duration: 0,
        });

        setTimeout(() => {
            removeToast(id);
            showToast({
                message: "Update complete",
                type: "success",
            });
        }, 2500);

    }

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
            onClick={upload} >
            Update
        </button>
    );
}
