import { customClasses } from 'shared/lib/classNames/customClasses';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={customClasses('', {}, [className!])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <MdLightMode style={{ color: 'goldenrod', background: 'none', fontSize: 50 }}/>
                : <MdDarkMode style={{ color: 'royalblue', background: 'none', fontSize: 50 }}/>}
        </Button>
    );
};
