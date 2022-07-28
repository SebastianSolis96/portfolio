import { projects } from "../data/projects"

export const getProjectsByParam = ( param = '' ) => {

    if( param === '' )
        return [];

    if( param === 'all' ) 
        return projects;
    
    return projects.filter( project => project.tag_project.includes( param ) )

}