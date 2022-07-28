// export const ProjectsCard = ({ ...props }) => {
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

    // console.log(buttons);

    return (
        <div className="card-project">
            <img className="img-project-card" src={ url } alt={ title } />
            <h1 className="title-project-card">{ title }</h1>
            {/* overlay title */}
            <div className="buttons-hover">
                {
                    buttons.map( button => 
                        ( button === 'more' ) 
                            ?   <div 
                                    key={ id+2 } 
                                    onClick={() => {}}
                                >
                                    <span className="icon-button-project view"></span>
                                    VER MÁS
                                </div>
                            :   ( button === 'github' ) 
                                ?   <a 
                                        key={ id+1 } 
                                        // href="https://www.geeksforgeeks.org" 
                                        href={ link_github }
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <span className="icon-button-project github"></span>
                                        GITHUB
                                    </a>
                                :   <a 
                                        key={ id } 
                                        // href="https://www.geeksforgeeks.org" 
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