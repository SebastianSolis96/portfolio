import './Skills.css';

export const SkillCard = ({ 
    title,
    url
}) => {
    return (
        <div className='skill'>
            <div className="circle-skill">
                <img src={ url } className="icon-skill" alt={`${title}-icon`} />
            </div>
            <p className="title-skill">{ title }</p>
        </div>
    )
}
