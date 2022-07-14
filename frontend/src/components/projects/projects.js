import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";
import './projects.css'

function ProjectsComponent() {

    const projects = useSelector(state => state.ProjectsReducer.projects)


    return (
        <div>
            <h1>This is a projects component</h1>
            {projects.length > 0 ?
                <div>
                    {projects.map(project =>
                        <div key={project.id} className='main-projects-container'>
                            <p>
                                <Link
                                    to={{
                                        pathname: `/projects/${project.id}/`,
                                        fromDashboard: false
                                    }}
                                    className='for-all-links'>
                                    {project.name}
                                </Link>
                                <p onMouseDownCapture={
                                    () => alert(
                                        project.size == 'big team' ? 'more than 25 devs' :
                                        project.size == 'average team' ? 'more than 10 but less than 25 devs'  :
                                        'more than 25 devs')}>
                                    {project.size}
                                </p>
                            </p>
                            <p onMouseDownCapture={
                                () => alert(project.full_project == 'full' ? 'ok' : project.full_project)}>
                                {project.full_project == 'full' ? <>&#9989;</> : <>&#10060;</>}
                            </p>
                            {/*                             <DeleteProject id={project.id}/>
 */}                        </div>)}
                </div>
                : <Loader />}
            {/*             <AddProject />
 */}        </div>
    )
}

export default ProjectsComponent;