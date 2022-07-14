import { getAllDevToFr } from "../actions"
import axios from "axios"

export function fetchAllDevToFr() {

    return dispatch => {
        dispatch(getAllDevToFr)

        axios.get(`http://127.0.0.1:8000/dev-to-framework/`).then(res => {
            dispatch(getAllDevToFr(res.data))
        })
    }


}