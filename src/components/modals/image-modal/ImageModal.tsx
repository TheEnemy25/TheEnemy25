import React from "react";
import "./ImageModal.scss";
import BaseModal from "../BaseModal";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
            <div className="image-modal">
                {children}
            </div>
        </BaseModal>
    );
};

export default ImageModal;
