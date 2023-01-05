import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<PublicRouter><LoginPage /></PublicRouter>} />
                {/*<Route path="/*" element={<HeroesRoutes />} />*/}
                <Route path="/*" element={<PrivateRouter><HeroesRoutes /></PrivateRouter>}></Route>
            </Routes >
        </>
    )
}
