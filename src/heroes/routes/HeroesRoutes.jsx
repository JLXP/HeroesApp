import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui';
import { MarvelPage, DcPage } from '../pages';


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="/*" element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    )
}
