import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Smt from "./devTasks/smt";


function CurrentProjects({ developer }) {
    const current_projects = developer.current_pr;
    const free_status = developer.free_status;

    const [current, setCurrent] = useState({ isOpen: true });

    const projects = useSelector(state => state.ProjectsReducer.projects)

    return (
        <div>
            {
                free_status ?
                    <h2>free dev</h2>
                    :
                    <>
                        <React.Fragment>
                            <p>current projects: <button onClick={() => setCurrent({ isOpen: !current.isOpen })}>
                                {current.isOpen ? "close projects" : "open projects"}
                            </button></p>
                            {current.isOpen &&
                                <>
                                    {
                                        projects.length > 0 ?
                                            <>
                                                {current_projects.map(e =>
                                                    <p>
                                                        <Link to={{
                                                            pathname: `/projects/${e}/`,
                                                            fromDashboard: false
                                                        }}>
                                                            {projects.filter(pr => pr.id == e)[0].name}
                                                            ...{e}
                                                        </Link>
                                                        <h onMouseDown={() => {
                                                            projects.filter(pr => pr.id == e)[0].status == 'open' ? alert('project is open') :
                                                                alert('project is close')
                                                        }}>
                                                            {projects.filter(pr => pr.id == e)[0].status == 'open' ? <>&#9989;</> : <>&#10060;</>}
                                                        </h>
                                                        <p>mark is {projects.filter(pr => pr.id == e)[0].mark}..id is {e}</p>
                                                        <p><Smt developer={developer} st={e} /></p>
                                                    </p>)}
                                            </> :
                                            <></>}
                                </>
                            }
                        </React.Fragment>
                    </>
            }
        </div>
    )
}

export default CurrentProjects;