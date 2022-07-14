import { GET_ALL_DEV_TO_LANGUAGE } from "./../types";

const initialState = {
    dev_to_lan: []
}

export const DevToLanReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DEV_TO_LANGUAGE:
            return {
                ...state, dev_to_lan: [...state.dev_to_lan, ...action.payload]
            }
        default:
            return state;
    }
}
