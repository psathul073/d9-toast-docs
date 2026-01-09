import { useToast, ToastType, ToastPosition, ToastAudioOptions, ToastTheme } from "d9-toast";

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

    const { showToast, sounds } = useToast();

    return (
        <button
            style={{
                padding: "10px 16px",
                background: "rgb(92 96 255",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
            }}
            onClick={() => showToast({
                type, message, position, title, className, audio: audio ? audio : {
                    audioFile: sounds[type],
                },
                theme, closable, autoClose, progress
            })}
        >
            Show Toast
        </button>
    );
}
