import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAllLanguages } from "../../redux/actions/async/fetchAllLanguages";
import Loader from '../general/additional/loader';


function UpdateProject({ project }) {
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
            /*             headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + String(authTokens.access)
                        }, */
            url: `http://127.0.0.1:8000/projects/${project.id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })

    }

    const handleSelect = function (selectedItems) {
        const flavors = [];
        for (let i = 0; i < selectedItems.length; i++) {
            flavors.push(selectedItems[i].value);
        }
        setStack(flavors);
    }
    return (
        <div>
            {languages.length > 0 ?
                <React.Fragment>
                    <button onClick={() => { setOpen({ isOpen: !open.isOpen }) }}>
                        {open.isOpen ? "close" : "open"}
                    </button>
                    {open.isOpen &&
                        <div className='add-developer'>
                            <div>
                                <input
                                    type="text"
                                    placeholder={project.name}
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <hr />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={project.description}
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <hr />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    placeholder={project.mark}
                                    name="mark"
                                    value={mark}
                                    onChange={(e) => setMark(e.target.value)}
                                />
                                <hr />
                            </div>
                            <form>
                                <select multiple={true}
                                    value={stack}
                                    onChange={(e) => { handleSelect(e.target.selectedOptions) }}>
                                    <option>choose stack</option>
                                    {languages.map(e => (
                                        <option value={e.id}>{e.name}</option>
                                    )
                                    )}
                                </select>
                            </form>
                            <label >
                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option>open/close</option>
                                    <option value={'open'}>open</option>
                                    <option value={'close'}>close</option>
                                </select>
                            </label>
                            <br />
                            <button onClick={UpdatePr}>
                                update!
                            </button>
                        </div>}
                </React.Fragment>
                : <Loader />}
        </div>

    )
}

export default UpdateProject;