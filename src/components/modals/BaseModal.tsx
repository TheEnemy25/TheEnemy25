import React from "react";
import "./BaseModal.scss";
import { useDialogModal } from "../../hooks/modals/useDialogModal";
import ModalCloseButton from "../buttons/modal-close-button/ModalCloseButton";

interface BaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, children }) => {
    const dialogRef = useDialogModal(isOpen, onClose);

    return (
        <>
            <dialog ref={dialogRef} className="base-modal" onClick={onClose} aria-modal="true">
                <form method="dialog" className="base-modal__container" onClick={(e) => e.stopPropagation()}>
                    <ModalCloseButton onClose={onClose} />
                    <div className="base-modal__inner">{children}</div>
                </form>
            </dialog>
        </>
    );
};

export default BaseModal;
