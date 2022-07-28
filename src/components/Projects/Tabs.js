import { useContext, useState } from 'react'

import { ProjectsContext } from '../../context/ProjectsContext';
import { types } from '../../types/types';

export const Tabs = () => {

    const { dispatch } = useContext(ProjectsContext);

    const [ toggleState, setToggleState ] = useState('all');

    const handleToggle = ( index ) => {
        setToggleState(index);

        dispatch({
            type: types.toggle,
            payload: index
        });
    }

    return (
        <div className="container-tabs">
            <div 
                className={ toggleState === 'all' ? "tabs active-tabs" : "tabs" }
                onClick={ () => handleToggle('all') }
            >
                TODOS
            </div>
            <div 
                className={ toggleState === 'react' ? "tabs active-tabs" : "tabs" }
                onClick={ () => handleToggle('react') }
            >
                REACT
            </div>
            <div 
                className={ toggleState === 'android' ? "tabs active-tabs" : "tabs" }
                onClick={ () => handleToggle('android') }
            >
                ANDROID
            </div>
            <div 
                className={ toggleState === 'ui' ? "tabs active-tabs" : "tabs" }
                onClick={ () => handleToggle('ui') }
            >
                UI/UX
            </div>
            <div 
                className={ toggleState === 'html' ? "tabs active-tabs" : "tabs" }
                onClick={ () => handleToggle('html') }
            >
                HTML/CSS/JS
            </div>
        </div>
    )
}
