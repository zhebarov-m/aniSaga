import styles from './PageLoader.module.scss'
import customClasses from 'shared/lib/classNames/customClasses'
import { Loader } from 'shared/Loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={customClasses(styles.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
