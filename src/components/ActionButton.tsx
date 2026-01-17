import { toast } from "d9-toast";
import { JSX } from "react";

const buttonStyle = {
    height: "40px",
    width: "100px",
    fontSize: "1rem",
    background: "#7a4bf6",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
}

export function UndoButton(): JSX.Element {

    return (
        <button
            style={buttonStyle}
            onClick={() => toast.warning( "Item deleted",{
                actions: [
                    {
                        text: "Undo",
                        callback: ({ id }) => toast.dismiss(id),
                    },
                ],
            })} >
            Show Toast
        </button>
    );
}


export function MultiButton(): JSX.Element {

    return (
        <button
            style={buttonStyle}
            onClick={() => toast.info( "Unsaved changes",{
                actions: [
                    { text: "Save" },
                    { text: "Discard", className: "text-red-500" },
                ],
            })} >
            Show Toast
        </button>
    );
}