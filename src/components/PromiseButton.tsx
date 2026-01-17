import { toast, ToastType } from "d9-toast";
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


export const Update: () => JSX.Element = () => {

   const  handleUpdate = (): void => {
      toast.promise(
        () =>
            new Promise((resolve) =>
                setTimeout(() => resolve({ status: "complete" }), 3000)
            ),
        {
            loading: "Updating file...",
            success: (res: { status: string }) => `Update ${res.status}`,
            error: "Update error.",
        },
    );   
    }
   
    return (<button
        style={buttonStyle}
        onClick={handleUpdate}
    >
        Update
    </button>)
};

export const Upload: () => JSX.Element = () => {

    const handleUpload = () : void => {
        toast.promise(
            () =>
                new Promise((resolve) =>
                    setTimeout(() => resolve({ status: "complete" }), 3000)
                ),
            {
                loading: "Uploading file...",
                success: (res: { status: string }) => `Upload ${res.status}`,
                error: "Uploading failed",
            },
            {
                type: "submit"
            }
        );
    }


    return (<button
        style={buttonStyle}
        
        onClick={handleUpload}
    >
        Upload
    </button>)
};
