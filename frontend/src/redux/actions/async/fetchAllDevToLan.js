import { getAllDevToLan } from "../actions"
import axios from "axios"

export function fetchAllDevToLan() {

    return dispatch => {
        dispatch(getAllDevToLan)

        axios.get(`http://127.0.0.1:8000/dev-to-lang/`).then(res => {
            dispatch(getAllDevToLan(res.data))
        })
    }


}