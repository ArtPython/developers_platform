import { GET_ALL_LANGUAGES, GET_ONE_LANGUAGE } from "./../types";

const initialState = {
    languages: [],
    language: []
}

export const LanguagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_LANGUAGES:
            return {
                ...state, languages: [...state.languages, ...action.payload]
            }
        case GET_ALL_LANGUAGES:
            return {
                ...state, language: [...state.language, action.payload]
            }
        default:
            return state;
    }
}
