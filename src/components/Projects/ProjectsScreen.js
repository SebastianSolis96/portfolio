import { useContext, useMemo } from 'react';

import { ProjectsContext } from '../../context/ProjectsContext';
import { getProjectsByParam } from '../../helpers/getProjectsByParam';
import { ProjectsCard } from './ProjectsCard';
import { Tabs } from './Tabs';
import { ProjectModal } from './ProjectModal';

import './Projects.css';

export const ProjectsScreen = () => {

    const { projectReducer:{ param } } = useContext(ProjectsContext);

    const projects = useMemo( () =>  getProjectsByParam( param || 'all' ), [ param ] );
    
    return (
        <div className="projects-screen">
            <Tabs />
            
            <div className="projects-container">
                {projects.length > 0
                    ?   projects.map( project => 
                            <ProjectsCard 
                                key={ project.id }
                                { ...project }
                            />
                        )
                    :   <div className="card-project">
                        </div>
                }
            </div>

            <ProjectModal />
        </div>
    )
}
