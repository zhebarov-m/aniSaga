import { customClasses } from 'shared/lib/classNames/customClasses';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={customClasses(styles.PageLoader, {}, [className!])}>
        <Loader />
    </div>
);
