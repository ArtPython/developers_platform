import { getParticularDeveloper } from "../actions"
import axios from "axios"

export function fetchOne(smt) {

    return dispatch => {
        dispatch(getParticularDeveloper)

        axios.get(`http://127.0.0.1:8000/developers/${smt}`).then(res => {
            dispatch(getParticularDeveloper(res.data))
        })
    }


}