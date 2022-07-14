import { GET_ALL_FRAMEWORKS } from "./../types";

const initialState = {
    frameworks: []
}

export const FrameworksReducer=(state=initialState, action) => {
    switch (action.type) {
        case GET_ALL_FRAMEWORKS:
            return {
                ...state, frameworks: [...state.frameworks, ...action.payload]
            }
        default:
            return state;
    }
}
