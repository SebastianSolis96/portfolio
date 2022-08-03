import { projects } from "../data/projects"

export const getProjectsById = ( id = '' ) => {

    return projects.find( project => project.id === id )

}