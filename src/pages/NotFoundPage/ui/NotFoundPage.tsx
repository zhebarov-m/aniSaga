import { customClasses } from 'shared/lib/classNames/customClasses';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={customClasses(cls.NotFoundPage, {}, [className!])}>
            {t('Страница не найдена')}
        </div>
    );
};
