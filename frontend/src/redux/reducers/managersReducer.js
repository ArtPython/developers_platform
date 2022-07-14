import { GET_ALL_MANAGERS } from "./../types";

const initialState = {
    managers: [],
}

export const ManagersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MANAGERS:
            return {
                ...state, managers: [...state.managers, ...action.payload]
            }
        default:
            return state;
    }
}
