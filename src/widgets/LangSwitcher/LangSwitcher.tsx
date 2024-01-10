import { customClasses } from 'shared/lib/classNames/customClasses';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import IconEnglish from 'shared/assets/icons/flags/en.png';
import IconRussian from 'shared/assets/icons/flags/ru.png';

interface LangSwitcherProps {
    className?: string;
    short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const getLanguageIcon = () => (i18n.language === 'ru'
        ? <img width={20} src={IconEnglish} alt="" />
        : <img width={20} src={IconRussian} alt="" />);

    return (
        <Button
            className={customClasses('', {}, [className!])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {short ? getLanguageIcon() : t('Язык')}
        </Button>
    );
};
