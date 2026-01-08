import { useToast } from "d9-toast";
import { JSX } from "react";


export function ConfirmButton(): JSX.Element {

    const { showToast, removeToast } = useToast();

    const handleConfirm = () => {
        let toastIdRef = null;

        const model = (
            <div className="confirm_box">
                <h1>Delete</h1>
                <p>Are you sure, do you want delete?</p>
                <div className="confirm_actions">
                    <button onClick={() => toastIdRef && removeToast(toastIdRef)}>
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            // Delete logic
                            toastIdRef && removeToast(toastIdRef);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );

        const id = showToast({
            message: model,
            position: "center",
            autoClose: false,
            title: false,
        });

        toastIdRef = id;
    };

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
            onClick={handleConfirm} >
            Confirm button
        </button>
    );
}