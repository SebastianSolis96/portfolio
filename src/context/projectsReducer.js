import { types } from "../types/types";

const initState = {
    param: 'all',
    modal: false,
    projectOnModal: '',
}

export const projectsReducer = (state = initState, action) => {

    switch ( action.type ) {
        case types.toggle:
            return {
                ...state,
                param: action.payload
            }

        case types.modalOpen:
            return {
                ...state,
                modal: !state.modal
            }

        case types.projectModal:
            return {
                ...state,
                projectOnModal: action.payload
            }

        case types.cleanProjectModal:
            return {
                ...state,
                projectOnModal: ''
            }
            
        default:
            return state;
    }

}