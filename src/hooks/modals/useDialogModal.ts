import { useEffect, useRef } from "react";

export function useDialogModal(isOpen: boolean, onClose: () => void) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
            document.body.style.overflow = "hidden";
        } else {
            dialog.close();
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleClose = () => onClose();
        dialog.addEventListener("close", handleClose);

        return () => dialog.removeEventListener("close", handleClose);
    }, [onClose]);

    return dialogRef;
}