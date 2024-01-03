import styles from './AppLink.module.scss'
import customClasses from 'shared/lib/classNames/customClasses'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC, type ReactNode } from 'react'

export enum eApLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface iAppLinkProps extends LinkProps {
    className?: string
    children: ReactNode
    theme: eApLinkTheme
}

export const AppLink: FC<iAppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = eApLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={customClasses(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
