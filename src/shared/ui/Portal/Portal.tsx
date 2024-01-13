import { customClasses } from 'shared/lib/classNames/customClasses';
import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Portal.module.scss';

interface PortalProps {
    children: ReactNode,
    element?: HTMLElement
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        element = document.body,
    } = props;
    return (
        createPortal(children, element)
    );
};
