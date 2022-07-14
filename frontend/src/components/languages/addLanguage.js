import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddLanguage = () => {
    const [photo, setPhoto] = useState(null);
    const history = useHistory('');

    const [name, setName] = useState('')

    const AddDev = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('photo', photo)
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/languages/',
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push('/')
        })
    }

    return (
        <div>
            {photo ?
                <div>
                    {photo && (
                        <div>
                            <img alt="" src={URL.createObjectURL(photo)}
                                style={{ width: 250, height: 250, borderRadius: 125 }} />
                            <br />
                            <button onClick={() => setPhoto(null)}>Remove</button>
                        </div>
                    )}
                </div> : <>lol</>}
            <br />
            <br />
            <div>
                <input
                    type="text"
                    placeholder="developer's name"
                    name="name"
                    value={name}
                    defaultValue='null'
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input
                    type="file"
                    placeholder="lol"
                    name='photo'
                    onChange={(event) => {
                        setPhoto(event.target.files[0]);
                    }}
                />
            </div>
            <button onClick={AddDev}>
                add language
            </button>
        </div>
    );
};

export default AddLanguage;