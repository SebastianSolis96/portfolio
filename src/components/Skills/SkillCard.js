import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

import './Skills.css';

export const SkillCard = ({ 
    title,
    url
}) => {
    return (
        <div className='skill'>
            <div className="circle-skill">
                <div className="icon-skill">
                    <RenderSmoothImage src={url} alt={`${title}-icon`} />
                </div>
            </div>
            <p className="title-skill">{ title }</p>
        </div>
    )
}
