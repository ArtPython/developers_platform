import { getAllDevTo} from "../actions"
import axios from "axios"

export function fetchAllDevTo() {

    return dispatch => {
        dispatch(getAllDevTo)

        axios.get(`http://127.0.0.1:8000/dev-to-project/`).then(res => {
            dispatch(getAllDevTo(res.data))
        })
    }
}