import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

const AppRouter = () => {
    return (
        <Routes>
            {routeConfig.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        (<Suspense fallback={<PageLoader/>}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>)
                    }/>
            ))}
        </Routes>
    )
}

export default AppRouter
