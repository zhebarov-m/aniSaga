import { customClasses } from 'shared/lib/classNames/customClasses';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={customClasses(styles.Navbar, {}, [className!])}>
            <div className={styles.links}>
                /
            </div>
        </div>
    );
};
