import { getAllDevelopers } from "../actions"
import axios from "axios"

export function fetchAllDevelopers() {

    return dispatch => {
        dispatch(getAllDevelopers)

        axios.get(`http://127.0.0.1:8000/developers/`).then(res => {
            dispatch(getAllDevelopers(res.data))
        })
    }


}