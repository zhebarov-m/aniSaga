import { customClasses } from 'shared/lib/classNames/customClasses';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = () => {
        setIsAuthModal((prev) => !prev);
    };

    return (
        <div className={customClasses(styles.Navbar, {}, [className!])}>
            <Button
                theme={ThemeButton.OUTLINE}
                className={styles.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} isClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi asperiores aut beatae
                consequatur corporis fugiat
                fugit iure, libero natus nesciunt non quia quibusdam quidem repellat, sed vel velit voluptates.
            </Modal>
        </div>
    );
};
