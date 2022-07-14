import { getAllFrameworks} from "../actions"
import axios from "axios"

export function fetchAllFrameworks() {

    return dispatch => {
        dispatch(getAllFrameworks)

        axios.get(`http://127.0.0.1:8000/frameworks/`).then(res => {
            dispatch(getAllFrameworks(res.data))
        })
    }


}