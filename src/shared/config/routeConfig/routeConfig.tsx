import {RouteProps} from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import {FaqPage} from "pages/FAQPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    MAIN = 'main',
    FAQ = 'faq',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FAQ]: '/faq',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />
    },
    {
        path: RoutePath.faq,
        element: <FaqPage />
    },
    {
        path: RoutePath.about,
        element: <AboutPage />
    },
];