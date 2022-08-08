import { useReducer } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { HomeScreen } from '../components/Home/HomeScreen';
import { Navbar } from '../components/ui/navbar/Navbar';
import { AboutScreen } from '../components/About/AboutScreen';
import { ProjectsScreen } from '../components/Projects/ProjectsScreen';
import { SkillsScreen } from '../components/Skills/SkillsScreen';
import { ProjectsContext } from '../context/ProjectsContext';
import { projectsReducer } from '../context/projectsReducer';
import { ContactScreen } from '../components/Contact/ContactScreen';
// import { SPARoutes } from './SPARoutes';

import './Router.css';

const init = () => { 
    return {
        param: 'all',
        modal: false,
        projectOnModal: '',
    }
};

export const AppRouter = () => {

    const [ projectReducer, dispatch ] = useReducer( projectsReducer, {}, init );

    return (
        <div className="container-routes">
            <div className="container-routes-glass">
                <BrowserRouter>
                    <Navbar />
                    
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />

                        <Route path="/sobre-mi" element={ <AboutScreen /> } />

                        <Route path="/skills" element={ <SkillsScreen /> } />

                        <Route path="/proyectos" element={ 
                            <ProjectsContext.Provider value={{ projectReducer, dispatch }} >
                                <ProjectsScreen />
                            </ProjectsContext.Provider>
                        }/>
                        
                        <Route path="/contacto" element={ <ContactScreen /> } />

                        <Route path="/*" element={<HomeScreen />} />    

                        {/* <Route path="/*" element={<SPARoutes />} /> */}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}
