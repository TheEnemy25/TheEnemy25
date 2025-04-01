import React from "react";

type IconProps = {
    className?: string;
};

const UkraineIcon: React.FC<IconProps> = ({ className = "" }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 513 343"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path d="M0 0.962891H513V342.956H0V0.962891Z" fill="#FFDA44" />
                <path d="M0 0.962891H513V171.959H0V0.962891Z" fill="#338AF3" />
            </g>
            <defs>
                <clipPath id="clip0_301_153">
                    <rect
                        width="513"
                        height="342"
                        fill="white"
                        transform="translate(0 0.958984)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default UkraineIcon;
