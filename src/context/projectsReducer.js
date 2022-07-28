import { types } from "../types/types";

const initState = {
    param: 'all'
}

export const projectsReducer = (state = initState, action) => {

    switch ( action.type ) {
        case types.toggle:
            return {
                param: action.payload
            }
            
        default:
            return state;
    }

}