import styles from './Button.module.scss'
import customClasses from "shared/lib/classNames/customClasses";
import {ButtonHTMLAttributes, FC} from "react";

export const enum ThemeButton {
    CLEAR = 'clear',
    DARK_MODE = 'dark-mode',
    LIGHT_MODE = 'light-mode'
}

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton;
}

export const Button: FC<iButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props
    console.log(theme)

    return (
        <button
            className={customClasses(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};