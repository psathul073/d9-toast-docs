import { toast, ToastType, ToastPosition, ToastAudioOptions, ToastTheme } from "d9-toast";

type Props = {
    type: ToastType;
    message: string | React.ReactNode;
    position?: ToastPosition;
    title: boolean,
    audio: ToastAudioOptions | null,
    className: string,
    theme: ToastTheme,
    closable: boolean,
    autoClose: boolean,
    progress: boolean,
};

export function ToastButton({ 
    type, message,
    position = "top-right", title = true,
    audio = null, className, theme, closable, autoClose, progress
 }: Props) {


    return (
        <button
            style={{
                height: "40px",
                width: "120px",
                fontSize: "1rem",
                background: "#7a4bf6",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
            }}
            onClick={() => toast[type](message, {
                position, title, className, audio: audio ? audio : {
                    audioFile: toast.sounds[type],
                },
                theme, closable, autoClose, progress
            })}
        >
            Show Toast
        </button>
    );
}
