import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { HomeScreen } from '../components/Home/HomeScreen';
import { Navbar } from '../components/ui/navbar/Navbar';
import { SPARoutes } from './SPARoutes';

import './Router.css';

export const AppRouter = () => {
    return (
        <div className="container-routes">
            <div className="container-routes-glass">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />

                        <Route path="/*" element={<SPARoutes />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}
