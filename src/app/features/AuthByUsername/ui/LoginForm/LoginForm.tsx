import { customClasses } from 'shared/lib/classNames/customClasses';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import React from 'react';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={customClasses(styles.LoginForm, {}, [className!])}>
            <Input type="text" className={styles.input} />
            <Input type="text" className={styles.input} />
            <Button className={styles.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
