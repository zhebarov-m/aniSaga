import { customClasses } from 'shared/lib/classNames/customClasses';
import React, { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AiOutlineHome } from 'react-icons/ai';
import { GoChecklist } from 'react-icons/go';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={customClasses(styles.Sidebar, { [styles.collapsed]: collapsed }, [className!])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={SizeButton.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.main}
                    className={styles.item}
                >
                    <AiOutlineHome className={styles.icon} />
                    <span className={styles.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <div className={styles.item}>
                    <AppLink
                        theme={AppLinkTheme.PRIMARY}
                        to={RoutePath.faq}
                        className={styles.item}
                    >
                        <GoChecklist className={styles.icon} />
                        <span className={styles.link}>
                            {t('Вопросы')}
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={styles.lang}
                />
            </div>
        </div>
    );
};
