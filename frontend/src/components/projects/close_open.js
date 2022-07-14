import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAllLanguages } from "../../redux/actions/async/fetchAllLanguages";
import Loader from '../general/additional/loader';


function OpenClose({ project }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllLanguages())
    }, [])

    const languages = useSelector(state => state.LanguagesReducer.languages)

    const history = useHistory()
    const [open, setOpen] = useState({ isOpen: false });

    const [name, setName] = useState(project.name)
    const [description, setDescription] = useState(project.description)
    const [mark, setMark] = useState(project.mark)
    const [stack, setStack] = useState(project.stack)
    const [status, setStatus] = useState(project.status)


    const UpdatePr = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('description', description)
        formField.append('mark', mark)
        formField.append('stack', stack)
        formField.append('status', status)

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/projects/${project.id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })

    }

    return (
        <div>
            {languages.length > 0 ?
                <div>
                    <label >
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>open/close</option>
                            <option value={'open'}>open</option>
                            <option value={'close'}>close</option>
                        </select>
                    </label>
                    <br />
                    <button onClick={UpdatePr}>
                        close!
                    </button>
                </div>
            : <Loader />}
        </div>

    )
}

export default OpenClose;