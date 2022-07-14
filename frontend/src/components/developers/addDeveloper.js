import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Loader from '../general/additional/loader';

function AddDeveloper() {

    const languages = useSelector(state => state.LanguagesReducer.languages)
    const all_frameworks = useSelector(state => state.FrameworksReducer.frameworks)
    const all_projects = useSelector(state => state.ProjectsReducer.projects)


    const history = useHistory('');
    const [open, setOpen] = useState({ isOpen: false });


    const [name, setName] = useState('')
    const [skill, setSkill] = useState(7)
    const [englishLevel, setEnglishLevel] = useState(null)
    const [workSince, setWorkSince] = useState('2021-11-11')
    const [stack, setStack] = useState([])
    const [frameworks, setFrameworks] = useState([])
    const [projects, setProjects] = useState([])


    const AddDev = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('skill', skill)
        formField.append('english_level', englishLevel)
        formField.append('work_since', workSince)
        formField.append('stack', stack)
        formField.append('frameworks', frameworks)
        formField.append('projects', projects)



        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/developers/',
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push('/')
        })
    }


    const levels = ["A", "B", "C"];

    return (
        <>
            {languages.length > 0 && all_frameworks.length > 0 && all_projects.length > 0 ?
                <>
                    <React.Fragment>
                        <button onClick={() => { setOpen({ isOpen: !open.isOpen }) }}>
                            {open.isOpen ? "close" : "open"}
                        </button>
                        {open.isOpen &&
                            <div className='add-developer'>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="developer's name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <hr />
                                    <input
                                        type="integer"
                                        placeholder="developer's skill"
                                        name="skill"
                                        value={skill}
                                        onChange={(e) => setSkill(e.target.value)}
                                    />
                                </div>
                                <label >
                                    <div >{englishLevel ?
                                        <p>
                                            english level is {englishLevel}
                                            <button
                                                onClick={() => { setEnglishLevel(null) }}>
                                                refresh english
                                            </button>
                                        </p>
                                        :
                                        <select value={englishLevel} onChange={(e) => setEnglishLevel(e.target.value)}>
                                            <option>choose english level</option>

                                            {levels.map(e => (
                                                <option value={e} >{e}</option>
                                            )
                                            )}
                                        </select>} </div>
                                </label>
                                <br />

                                <label >
                                    <div >{stack.length > 0 ?
                                        <p>
                                            stack is {stack.length}
                                            <button onClick={() => { setStack([]) }}>
                                                refresh stack
                                            </button>
                                        </p>

                                        :
                                        <select
                                            value={stack}
                                            onChange={(e) => setStack(e.target.value)}>
                                            <option>choose stack</option>
                                            {languages.map(e => (
                                                <option value={e.id}>
                                                    {e.name}
                                                </option>
                                            )
                                            )}
                                        </select>} </div>
                                </label>
                                <br />
                                {stack.length > 0 ?
                                    <label >
                                        <div >{frameworks.length > 0 ?
                                            <p>
                                                frameworks is {frameworks.length}
                                                <button
                                                    onClick={() => { setFrameworks([]) }}>
                                                    refresh frameworks
                                                </button>
                                            </p>
                                            :
                                            <select
                                                value={frameworks}
                                                onChange={(e) => setFrameworks(e.target.value)}>
                                                <option>choose frameowork</option>
                                                {all_frameworks.map(e =>
                                                    <>
                                                        {e.language == stack[0] ?
                                                            <option value={e.id} >{e.name}</option>
                                                            : <></>}
                                                    </>
                                                )}
                                            </select>} </div>
                                    </label> : <></>}
                                <br />
                                {stack.length > 0 && skill ?
                                    <label >
                                        <div >{projects.length > 0 ?
                                            <>
                                                <p>
                                                    projects is {projects.length}
                                                    <button onClick={() => { setProjects([]) }}>
                                                        refresh projects
                                                    </button>
                                                </p>
                                            </>
                                            :
                                            <select
                                                value={projects}
                                                onChange={(e) => setProjects(e.target.value)}>
                                                <option>choose projects</option>
                                                {all_projects.map(e =>
                                                    <>
                                                        {e.stack.map(l => l == stack[0] &&
                                                            skill >= e.mark &&
                                                            e.status == 'open' ?
                                                            <option value={e.id} >{e.name}</option>
                                                            : <>no projects</>)}
                                                    </>
                                                )}
                                            </select>} </div>
                                    </label> : <></>}
                                <br />
                                <button onClick={AddDev}>
                                    add a developer
                                </button>
                            </div>}
                    </React.Fragment>
                </>
                :
                <Loader />}
        </>
    )
}

export default AddDeveloper;

/* 
import Select from 'react-select';


const [l,setL] = useState()
let stChange = (e) =>
(
    setL(Array.isArray(e)?e.map(p=>p.name):[])
)

const lol =[
    {id:1, name:'asdasd'},
    {id:2, name:'asdasdada'},
    {id:3, name:'as111dasd'},
    {id:4, name:'asdasffffd'},
    {id:5, name:'asdasd11111'},
]
<Select isMulti={true}
options={lol} 
onChange={stChange}/> */