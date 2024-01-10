import { customClasses } from 'shared/lib/classNames/customClasses';
import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean | undefined,
    size?: SizeButton,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = SizeButton.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={customClasses(
                styles.Button,
                { [styles.square]: square! },
                [className!, styles[theme!], styles[size!]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
