import { GET_ALL_DEV_TO } from "./../types";

const initialState = {
    dev_to: []
}

export const DevToReducer=(state=initialState, action) => {
    switch (action.type) {
        case GET_ALL_DEV_TO:
            return {
                ...state, dev_to: [...state.dev_to, ...action.payload]
            }
        default:
            return state;
    }
}
