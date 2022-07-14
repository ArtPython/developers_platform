import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllLanguages } from '../../redux/actions/async/fetchAllLanguages';
import Loader from '../general/additional/loader';


function AddFramework() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllLanguages())
    }, [])

    const languages = useSelector(state => state.LanguagesReducer.languages)

    const history = useHistory('');
    const [open, setOpen] = useState({ isOpen: false });


    const [name, setName] = useState('')
    const [language, setLanguage] = useState('')


    const AddFr = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('language', language)
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/frameworks/',
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push('/')
        })
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
                                    placeholder="framework's name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <hr />
                            </div>
                            <label>
                                <select
                                    placeholder='lol' 
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}>
                                    <option>select language</option>                                    <option>choose stack</option>
                                    {languages.map(e => (
                                        <option value={e.id}>{e.name}</option>
                                    )
                                    )}
                                </select>
                            </label>

                            <br />
                            <button onClick={AddFr}>
                                add framework
                            </button>
                        </div>}
                </React.Fragment>
                : <Loader />}
        </div>
    )
}


export default AddFramework;
