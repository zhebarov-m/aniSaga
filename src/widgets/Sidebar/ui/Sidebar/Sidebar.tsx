import { customClasses } from 'shared/lib/classNames/customClasses';
import React, { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
            >
                toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
