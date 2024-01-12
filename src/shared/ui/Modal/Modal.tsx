import React, {
    FC, ReactNode, useCallback, useEffect,
} from 'react';
import { customClasses } from 'shared/lib/classNames/customClasses';
import { Portal } from 'shared/Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    isClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className, children, isOpen, isClose,
    } = props;

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen!,
    };

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
