import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import {motion} from 'framer-motion/dist/es/index';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

import { ProjectsContext } from '../../context/ProjectsContext';
import { getProjectsById } from '../../helpers/getProjectsById';
import { types } from '../../types/types';

import './Projects.css';

export const ProjectModal = () => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
        },
    };
    Modal.setAppElement('#root');

    const { projectReducer:{ modal, projectOnModal }, dispatch } = useContext(ProjectsContext);
    
    const [ widthCarousel, setWidthCarousel ] = useState(0);
    const carousel = useRef();

    const projectModal = useMemo( () =>  getProjectsById( projectOnModal ), [ projectOnModal ]);

    /* Set end scroll Carousel */
    useEffect(() => {
        setTimeout(() => {
            setWidthCarousel(carousel.current?.scrollWidth - carousel.current?.offsetWidth + 1)
        }, 3);
    }, [projectModal]);

    const closeModal = (e) => {
        e.preventDefault();
        dispatch({ type: types.modalOpen });
        dispatch({ type: types.cleanProjectModal });
    }

    return (
        <Modal
            isOpen={ modal }
            onRequestClose={ closeModal }
            shouldCloseOnOverlayClick={false}
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="background-modal"
        >
            <div className="close-modal">
                <div 
                    className="close-button"
                    onClick={ closeModal }
                >
                    X
                </div>
            </div>
            <div className="modal-container">
                <h1>{ projectModal?.title }</h1>

                {( projectModal?.imgs_carousel.length > 1 ) 
                    ?   <motion.div className="carousel">
                            <motion.div 
                                ref={ carousel }
                                drag="x"
                                dragConstraints={{ right: 0, left: -widthCarousel }}
                                className="inner-carousel"
                            >
                                { projectModal?.imgs_carousel.map( img => {
                                    return(
                                        <motion.div className="item-carousel" key={ img }>
                                            <RenderSmoothImage src={ img } alt={ img } />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    :   <div className="carousel">
                            <RenderSmoothImage src={ projectModal?.url ? projectModal?.url : '' } alt={ projectModal?.url } />
                        </div>
                }

                <div className="tags-container">
                    { projectModal?.language.map( tech => {
                        return(
                            <div className="tag" key={ tech }>{ tech }</div>
                        );
                    })}
                </div>

                <div className="info-container">
                    { projectModal?.info.map( p => {
                        return(
                            <p key={ p }>{ p }</p>
                        );
                    })}
                </div>
            </div>
        </Modal>
    )
}
