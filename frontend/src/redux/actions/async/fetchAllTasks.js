import { getAllTasks } from "../actions"
import axios from "axios"

export function fetchAllTasks() {

    return dispatch => {
        dispatch(getAllTasks)

        axios.get(`http://127.0.0.1:8000/tasks/`).then(res => {
            dispatch(getAllTasks(res.data))
        })
    }
}