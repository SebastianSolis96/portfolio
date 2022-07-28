import React, { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutScreen } from '../components/About/AboutScreen';
import { HomeScreen } from '../components/Home/HomeScreen';
import { ProjectsScreen } from '../components/Projects/ProjectsScreen';
import { SkillsScreen } from '../components/Skills/SkillsScreen';
import { ProjectsContext } from '../context/ProjectsContext';
import { projectsReducer } from '../context/projectsReducer';

const init = () => { return ""; };

export const SPARoutes = () => {

    const [ searchParam, dispatch ] = useReducer( projectsReducer, {}, init );

    return (
        <>
            <Routes>
                <Route path="/sobre-mi" element={ <AboutScreen /> } />
                <Route path="/skills" element={ <SkillsScreen /> } />
                {/* <Route path="/proyectos" element={ <ProjectsScreen /> } /> */}
                <Route path="/proyectos" element={ 
                    <ProjectsContext.Provider value={{ searchParam, dispatch }} >
                        <ProjectsScreen />
                    </ProjectsContext.Provider>
                }/>


                <Route path="/*" element={<HomeScreen />} />
            </Routes>
        </>
    )
}
