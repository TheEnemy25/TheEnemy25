import React from "react";
import Close from "../../../assets/svgs/Close";
import "./ModalCloseButton.scss";

interface ModalCloseButtonProps {
    onClose: () => void;
    ariaLabel?: string;
}

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
    onClose,
    ariaLabel = "Close modal",
}) => (
    <button
        className="modal__close--button"
        onClick={onClose}
        aria-label={ariaLabel}
    >
        <Close />
    </button>
);

export default ModalCloseButton;
