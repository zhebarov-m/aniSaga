import React, {
    FC, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { customClasses } from 'shared/lib/classNames/customClasses';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    isClose?: () => void,
    lazy?: boolean,
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        isClose,
        lazy,
    } = props;
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen!,
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (isClose) {
            isClose();
        }
    }, [isClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const contentPropagation = (e: React.MouseEvent) => e.stopPropagation();

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={customClasses(styles.Modal, mods, [className!])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={contentPropagation}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
