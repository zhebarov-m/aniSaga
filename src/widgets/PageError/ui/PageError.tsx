import styles from './PageError.module.scss'
import customClasses from 'shared/lib/classNames/customClasses'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={customClasses(styles.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
