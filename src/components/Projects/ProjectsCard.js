import { useContext } from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

import { ProjectsContext } from '../../context/ProjectsContext';
import { types } from '../../types/types';

import './Projects.css';

export const ProjectsCard = ({ 
    id,
    title,
    url,
    tag_project,
    buttons,
    link_github,
    link_demo,
    imgs_carousel,
    language,
    info
}) => {

    const { dispatch } = useContext(ProjectsContext);

    const openModal = (e) => {
        e.preventDefault();
        dispatch({ type: types.modalOpen });
        dispatch({
            type: types.projectModal,
            payload: id
        });
    }

    return (
        <div className="card-project">
            <div className="img-project-card">
                <RenderSmoothImage className="img-project-card" src={ url } alt={ title } />
            </div>
            
            <h1 className="title-project-card">{ title }</h1>

            <div className="buttons-hover">
                {
                    buttons.map( button => 
                        ( button === 'more' ) 
                            ?   <div 
                                    key={ id+2 } 
                                    onClick={openModal}
                                >
                                    <span className="icon-button-project view"></span>
                                    VER MÁS
                                </div>
                            :   ( button === 'github' ) 
                                ?   <a 
                                        key={ id+1 } 
                                        href={ link_github }
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <span className="icon-button-project github"></span>
                                        GITHUB
                                    </a>
                                :   <a 
                                        key={ id } 
                                        href={ link_demo } 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <span className="icon-button-project more"></span>
                                        DEMO
                                    </a>
                        
                    )
                }
            </div>
        </div>
    )
}