import { getOneLanguage } from "../actions"
import axios from "axios"

export function fetchOneLanguages({lan}) {

    return dispatch => {
        dispatch(getOneLanguage)

        axios.get(`http://127.0.0.1:8000/languages/${lan}/`).then(res => {
            dispatch(getOneLanguage(res.data))
        })
    }


}