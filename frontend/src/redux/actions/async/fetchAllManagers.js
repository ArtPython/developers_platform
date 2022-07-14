import { getAllManagers } from "../actions"
import axios from "axios"

export function fetchAllManagers() {

    return dispatch => {
        dispatch(getAllManagers)

        axios.get(`http://127.0.0.1:8000/managers/`).then(res => {
            dispatch(getAllManagers(res.data))
        })
    }


}