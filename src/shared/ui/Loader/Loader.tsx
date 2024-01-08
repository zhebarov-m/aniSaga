import { customClasses } from 'shared/lib/classNames/customClasses';
import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={customClasses(styles.ldsRoller, {}, [className!])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
