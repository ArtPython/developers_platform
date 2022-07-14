import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function AddDevToPro() {

    const history = useHistory('');
    const [open, setOpen] = useState({ isOpen: false });


    const [developer, setDeveloper] = useState('')
    const [project, setProject] = useState('')
    const [stats, setStats] = useState(true)

    const AddDev = async () => {
        let formField = new FormData()
        formField.append('developer', developer)
        formField.append('project', project)
        formField.append('stats', stats)
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/dev-to-project/',
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push('/')
        })
    }

    return (
        <React.Fragment>
            <button onClick={() => { setOpen({ isOpen: !open.isOpen }) }}>
                {open.isOpen ? "close" : "open"}
            </button>
            {open.isOpen &&
                <div className='add-developer'>
                    <div>
                        <input
                            type="number"
                            placeholder="developer's name"
                            name="developer"
                            value={developer}
                            onChange={(e) => setDeveloper(e.target.value)}
                        />
                        <hr />
                        <input
                            type="number"
                            placeholder="developer's name"
                            name="project"
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                        />
                        <hr />
                    </div>
                    <button onClick={AddDev}>
                        add a developer
                    </button>
                </div>}
        </React.Fragment>
    )
}

export default AddDevToPro;
