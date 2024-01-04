import styles from './Sidebar.module.scss'
import customClasses from 'shared/lib/classNames/customClasses'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={customClasses(styles.Sidebar, { [styles.collapsed]: collapsed }, [className!])}>
            <button onClick={onToggle}>{t('Переключатель')}</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang}/>
            </div>
        </div>
    )
}
