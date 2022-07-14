import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from '../general/additional/loader';


function UpdateLanguage({ language }) {

    const history = useHistory()
    const [open, setOpen] = useState({ isOpen: false });

    const [name, setName] = useState(language.name)
    const [photo, setPhoto] = useState(language.photo ? language.photo : null)


    const UpdateLan = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('photo', photo)


        await axios({
            method: 'PUT',
            /*             headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + String(authTokens.access)
                        }, */
            url: `http://127.0.0.1:8000/languages/${language.id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })

    }

    return (
        <div>
            <React.Fragment>
                <button onClick={() => { setOpen({ isOpen: !open.isOpen }) }}>
                    {open.isOpen ? "close" : "open"}
                </button>
                {open.isOpen &&
                    <div className='add-developer'>
                        <div>
                            <input
                                type="text"
                                placeholder={language.name}
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <hr />
                        </div>
                        <input
                            type="file"
                            placeholder="lol"
                            onChange={(event) => {
                                setPhoto(event.target.files[0]);
                            }}
                        />
                        <br />
                        <button onClick={UpdateLan}>
                            update language
                        </button>
                    </div>}
            </React.Fragment>
        </div>

    )
}

export default UpdateLanguage;