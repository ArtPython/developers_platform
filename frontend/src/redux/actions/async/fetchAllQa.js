import { getAllQA } from "../actions"
import axios from "axios"

export function fetchAllQA() {

    return dispatch => {
        dispatch(getAllQA)

        axios.get(`http://127.0.0.1:8000/qa/`).then(res => {
            dispatch(getAllQA(res.data))
        })
    }


}