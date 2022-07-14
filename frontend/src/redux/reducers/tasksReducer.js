import { GET_ALL_TASKS } from "./../types";

const initialState = {
    tasks: [],
}

export const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TASKS:
            return {
                ...state, tasks: [...state.tasks, ...action.payload]
            }
        default:
            return state;
    }
}
