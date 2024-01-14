import { customClasses } from 'shared/lib/classNames/customClasses';
import { Modal } from 'shared/ui/Modal/Modal';
import React from 'react';
import styles from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void,
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            className={customClasses(styles.LoginModal, {}, [className!])}
            isOpen={isOpen}
            isClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
