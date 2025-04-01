import { useEffect } from 'react';

export function useLockScroll(isMenuOpen: boolean) {
    useEffect(() => {
        if (isMenuOpen) {
            document.documentElement.classList.add('is-lock');
        } else {
            document.documentElement.classList.remove('is-lock');
        }

        return () => {
            document.documentElement.classList.remove('is-lock');
        };
    }, [isMenuOpen]);
}
