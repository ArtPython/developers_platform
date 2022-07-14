import { GET_ALL_QA } from "./../types";

const initialState = {
    qas: []
}

export const QAReducer=(state=initialState, action) => {
    switch (action.type) {
        case GET_ALL_QA:
            return {
                ...state, qas: [...state.qas, ...action.payload]
            }
        default:
            return state;
    }
}
