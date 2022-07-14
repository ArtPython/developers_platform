import { getAllProjects } from "../actions"
import axios from "axios"

export function fetchAllProjects() {

    return dispatch => {
        dispatch(getAllProjects)

        axios.get(`http://127.0.0.1:8000/projects/`).then(res => {
            dispatch(getAllProjects(res.data))
        })
    }


}