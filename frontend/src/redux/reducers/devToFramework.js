import { GET_ALL_DEV_TO_FRAMEWORK } from "./../types";

const initialState = {
    dev_to_fr: []
}

export const DevToFrReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DEV_TO_FRAMEWORK:
            return {
                ...state, dev_to_fr: [...state.dev_to_fr, ...action.payload]
            }
        default:
            return state;
    }
}
