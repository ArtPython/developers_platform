import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Loader from "../general/additional/loader";
import OpenClose from "./close_open";
import CurrentTeam from "./current_team/currentTeam";
import DeleteProject from "./deleteProject";
import PastTeam from "./past_team/pastTeam";
import ProjectTeam from "./projectTeam";
import UpdateProject from "./updateProject";
import './../../css/projects/projects.css';
import ProjectsTasks from "./projects_tasks/projectsTasks";
import LanguageNestedComponent from "../languages/languageNestedComponent";
import ProjectLanComponent from "./projectLanComponent";

function ProjectDetail({ match }) {

    const id = match.params.id;
    const [project, setProject] = useState({});
    const [currentDevelopers, setCurrentDevelopers] = useState([])
    const [pastDevelopers, setPastDevelopers] = useState([])
    const [currentManagers, setCurrentManagers] = useState([])
    const [pastManagers, setPastManagers] = useState([])
    const [currentQA, setCurrentQA] = useState([])
    const [pastQA, setPastQA] = useState([])
    const [currentTasks, setCurrentTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState([])


    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/projects/${id}/`,
        }).then(response => {
            setProject(response.data)
            setCurrentDevelopers(response.data.current_developers)
            setPastDevelopers(response.data.past_developers)
            setCurrentManagers(response.data.current_managers)
            setPastManagers(response.data.past_managers)
            setCurrentQA(response.data.current_qa)
            setPastQA(response.data.past_qa)
            setCurrentTasks(response.data.current_tasks)
            setDoneTasks(response.data.done_tasks)
        })
    }, [id])


    /* const languages = useSelector(state => state.LanguagesReducer.languages) */
    /* .filter(
        lang => lang.id == project.stack
    ) */

    return (
        <div>
            {project ?
                <div>
                    <div className='project-main-container'>
                        <div className='big-photo-container'>
                            <img src={project.photo} className='photo-container' />
                        </div>
                        <h1>{project.name} project detail</h1>
                        <ProjectTeam project={project} />
                        <CurrentTeam developers={currentDevelopers} managers={currentManagers} qas={currentQA} />
                        <PastTeam developers={pastDevelopers} managers={pastManagers} qas={pastQA} />
                        <h2 onMouseDown={() => {
                            project.full_project == 'full' ?
                                alert('team is ready and working') :
                                alert(project.full_project)
                        }}>
                            {project.full_project == 'full' ? 'full project' : 'need add devs'}
                        </h2>
                    </div>
                    <ProjectsTasks currentTasks={currentTasks} doneTasks={doneTasks} />
                    <h2>description: {project.description}</h2>
                    <h2>mark: {project.mark}</h2>
                    <h2>status: {project.status}</h2>
                    {project.stack ?
                        <>
                            <ProjectLanComponent stack={project.stack} />
                        </>
                        : <Loader />}
                </div>
                : <Loader />
            }
            {/*             <OpenClose project={project} />
 */}            <DeleteProject id={id} />
            {/*             <UpdateProject project={project} />
 */}        </div>
    )
}

export default ProjectDetail;