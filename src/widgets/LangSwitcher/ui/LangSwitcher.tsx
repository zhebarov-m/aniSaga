import styles from './LangSwitcher.module.scss'
import customClasses from "shared/lib/classNames/customClasses";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button";
import i18n from "shared/config/i18n/i18n";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher:FC<LangSwitcherProps> = (props) => {
    const {className} = props
    const {t} = useTranslation()

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={changeLang}
            className={customClasses(styles.LangSwitcher, {}, [className])}
        >
            {t("Язык")}
        </Button>
    );
};