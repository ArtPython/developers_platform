import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllDevelopers } from "./../../redux/actions/async/fetchAllDevelopers"
import { fetchAllLanguages } from "../../redux/actions/async/fetchAllLanguages";
import { fetchAllProjects } from "../../redux/actions/async/fetchAllProjects";
import Loader from "../general/additional/loader";
import LanguageList from "../languages/languagesList";
import ButtonDown from "../general/buttons/button";
import Smt from "./devTasks/smt";


function DoneProjects({ developer }) {
    const done_projects = developer.done_pr;

    const [expirience, setExpirience] = useState({ isOpen: false });
    const projects = useSelector(state => state.ProjectsReducer.projects)

    return (
        <div>
            <React.Fragment>
                <p>expirience: <button onClick={() => setExpirience({ isOpen: !expirience.isOpen })}>
                    {expirience.isOpen ? "close background" : "open background"}
                </button></p>
                {expirience.isOpen &&
                    <>
                        {projects.length ?
                            <div>
                                {done_projects.map(e =>
                                    <p>
                                        <Link to={{
                                            pathname: `/projects/${e}/`,
                                            fromDashboard: false
                                        }}>
                                            {projects.filter(pr => pr.id == e)[0].name}
                                            ...{e}
                                        </Link>
                                        <h onMouseDown={() => {
                                            e.status == 'open' ? alert('project is open') :
                                                alert('project is close')
                                        }}>
                                            {e.status == 'open' ? <>&#9989;</> : <>&#10060;</>}
                                        </h>
                                        <p><Smt developer={developer} st={e} /></p>
                                    </p>)}
                            </div> :
                            <></>}
                    </>
                }
            </React.Fragment>
        </div>
    )
}

export default DoneProjects;