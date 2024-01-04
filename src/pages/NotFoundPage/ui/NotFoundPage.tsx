import styles from './NotFoundPage.module.scss'
import customClasses from 'shared/lib/classNames/customClasses'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()
    return (
        <div className={customClasses(styles.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
}
