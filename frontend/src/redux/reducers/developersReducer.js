import { GET_ALL_DEVELOPERS, GET_PARTICULAR_DEVELOPER } from "./../types";

const initialState = {
    developers: []
}

export const DevelopersReducer=(state=initialState, action) => {
    switch (action.type) {
        case GET_ALL_DEVELOPERS:
            return {
                ...state, developers: [...state.developers, ...action.payload]
            }
        default:
            return state;
    }
}
