import { getAllLanguages} from "../actions"
import axios from "axios"

export function fetchAllLanguages() {

    return dispatch => {
        dispatch(getAllLanguages)

        axios.get(`http://127.0.0.1:8000/languages/`).then(res => {
            dispatch(getAllLanguages(res.data))
        })
    }


}