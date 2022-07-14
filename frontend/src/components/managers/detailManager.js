import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllProjects } from "../../redux/actions/async/fetchAllProjects";
import Loader from "../general/additional/loader";
/* import DoneCurrentProjects from "./done_current";
 */

function ManagerDetail({ match }) {

    const id = match.params.id;
    const [manager, setManager] = useState({});
    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/managers/${id}/`,
        }).then(response => {
            setManager(response.data)
        })
    }, [id])


    const languages = useSelector(state => state.LanguagesReducer.languages)

    const projects = useSelector(state => state.ProjectsReducer.projects)

    return (
        <div>
            {manager && languages.length > 0 && projects.length > 0 ?
                <div>
                    <h2>{manager.name}</h2>
                    <h2>experience is {manager.experience}</h2>
                     <h2>projects:</h2>
                    {manager.projects ?
                        <div>
                            {projects.map(e => (
                                <div>
                                    {e.id == manager.projects ?
                                        <Link to={{
                                            pathname: `/projects/${manager.projects}/`,
                                            fromDashboard: false
                                        }}>
                                            {e.name}
                                        </Link> : <></>}
                                </div>
                            ))}
                        </div> : <p>no current projects</p>}
                </div>
                : <Loader />
            }
        </div>
    )
}

export default ManagerDetail;