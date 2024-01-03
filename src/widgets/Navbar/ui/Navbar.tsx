import styles from './Navbar.module.scss'
import React, { type FC } from 'react'
import customClasses from 'shared/lib/classNames/customClasses'
import { AppLink, eApLinkTheme } from 'shared/ui/AppLink/AppLink'

interface iNavbarProps {
    className?: string
}

export const Navbar: FC<iNavbarProps> = (props) => {
    const { className } = props
    return (
        <div className={customClasses(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={eApLinkTheme.PRIMARY} className={styles.mainLink} to="/">Главная</AppLink>
                <AppLink theme={eApLinkTheme.PRIMARY} className={styles.faqLink} to="/faq">Вопросы</AppLink>
            </div>
        </div>
    )
}
