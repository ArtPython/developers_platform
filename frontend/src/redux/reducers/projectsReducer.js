import { GET_ALL_PROJECTS } from "./../types";

const initialState = {
    projects: []
}

export const ProjectsReducer=(state=initialState, action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS:
            return {
                ...state, projects: [...state.projects, ...action.payload]
            }
            
        default:
            return state;
    }
}
