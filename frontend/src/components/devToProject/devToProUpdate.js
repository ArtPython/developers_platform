import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function UpdateDevToPro({ dev }) {

    const history = useHistory('');
    const [open, setOpen] = useState({ isOpen: false });


    const [developer, setDeveloper] = useState('')
    const [project, setProject] = useState('')
    const [stats, setStats] = useState(false)

    const AddDev = async () => {
        let formField = new FormData()
        formField.append('developer', dev.developer)
        formField.append('project', dev.project)
        formField.append('stats', stats)
        await axios({
            method: 'put',
            url: `http://127.0.0.1:8000/dev-to-project/${dev.id}/`,
            data: formField,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response.data);
            history.push('/')
        })
    }

    return (
        <>
            <button onClick={AddDev}>
                leave
            </button>
            <>
                {/*<React.Fragment>
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
                        <label>
                            <select value={stats} onChange={(e) => setStats(e.target.value)}>
                                <option>choose</option>
                                <option value={true}>true</option>
                                <option value={false}>false</option>
                            </select>
                        </label>
                    </div> 
    <button onClick={AddDev}>
        add a developer
    </button>
                </div >}
        </React.Fragment > */}
            </>
        </>
    )
}

export default UpdateDevToPro;
