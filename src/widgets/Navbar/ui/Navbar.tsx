import { customClasses } from 'shared/lib/classNames/customClasses';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={customClasses(styles.Navbar, {}, [className!])}>
        <div className={styles.links}>
            <AppLink theme={AppLinkTheme.PRIMARY} className={styles.mainLink} to="/">Главная</AppLink>
            <AppLink theme={AppLinkTheme.PRIMARY} className={styles.faqLink} to="/faq">Вопросы</AppLink>
        </div>
    </div>
);
