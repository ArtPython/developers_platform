import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllLanguages } from '../../redux/actions/async/fetchAllLanguages';
import Loader from '../general/additional/loader';


function AddProject() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllLanguages())
    }, [])

    const languages = useSelector(state => state.LanguagesReducer.languages)

    const history = useHistory('');
    const [open, setOpen] = useState({ isOpen: false });


    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [mark, setMark] = useState()
    const [stack, setStack] = useState()

    const AddPr = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('description', description)
        formField.append('mark', mark)
        formField.append('stack', stack)
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/projects/',
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push('/')
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
                                    placeholder="project's name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <hr />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="description"
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <hr />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    placeholder="put difficulty of the project here"
                                    name="mark"
                                    value={mark}
                                    onChange={(e) => setMark(e.target.value)}
                                />
                                <hr />
                            </div>
                            <form>
                                <select multiple={true}
                                    value={stack}
                                    onChange={(e) => { handleSelect(e.target.selectedOptions) }}>                                        <option>choose stack</option>
                                    {languages.map(e => (
                                        <option value={e.id}>{e.name}</option>
                                    )
                                    )}
                                </select>
                            </form>

                            <br />
                            <button onClick={AddPr}>
                                add project
                            </button>
                        </div>}
                </React.Fragment>
                : <Loader />}
        </div>
    )
}


export default AddProject;
