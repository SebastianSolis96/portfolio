import { useContext, useMemo } from 'react';

import { ProjectsContext } from '../../context/ProjectsContext';
import { getProjectsByParam } from '../../helpers/getProjectsByParam';
import { ProjectModal } from './ProjectModal';

import './Projects.css';
import { ProjectsCard } from './ProjectsCard';
import { Tabs } from './Tabs';

export const ProjectsScreen = () => {

    const { searchParam:{ param } } = useContext(ProjectsContext);
    // console.log(param);

    const projects = useMemo( () =>  getProjectsByParam( param || 'all' ), [ param ] );
    // console.log(projects.length);
    return (
        <div className="projects-screen">
            <Tabs />
            
            <div className="projects-container">
                {/* <ProjectsCard param={ param || 'all' } /> */}
                {
                    projects.map( project => 
                        <ProjectsCard 
                            key={ project.id }
                            { ...project }
                        />
                    )
                }
            </div>

            <ProjectModal />
        </div>
    )
}
