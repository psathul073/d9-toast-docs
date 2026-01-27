import { toast } from "d9-toast";
import { JSX } from "react";


export function ConfirmButton(): JSX.Element {


    const handleConfirm = () => {
        let toastIdRef = null;

        const model = (
            <div className="confirm_box">
                <h1>Delete</h1>
                <p>Are you sure, do you want delete?</p>
                <div className="confirm_actions">
                    <button onClick={() => toastIdRef && toast.dismiss(toastIdRef)}>
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            // Delete logic
                            toastIdRef && toast.dismiss(toastIdRef);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );

        const id = toast(model, {
            position: "center",
            autoClose: false,
            title: false,
            expand: true,
        });

        toastIdRef = id;
    };

    return (
        <button
            style={{
                height: "40px",
                width: "150px",
                fontSize: "1rem",
                background: "#7a4bf6",
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