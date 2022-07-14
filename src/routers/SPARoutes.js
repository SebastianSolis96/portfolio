import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutScreen } from '../components/About/AboutScreen';
import { HomeScreen } from '../components/Home/HomeScreen';
// import { Footer } from '../components/ui/footer/Footer';

export const SPARoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/sobre-mi" element={ <AboutScreen /> } />

                <Route path="/*" element={<HomeScreen />} />
            </Routes>

            {/* <Footer /> */}
        </>
    )
}
