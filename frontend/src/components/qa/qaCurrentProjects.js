import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";

function QACurrentProjects({ currentProjects }) {

    const projects = useSelector(state => state.ProjectsReducer.languages)

    return (
        <>
            {
                projects.length > 0 ?
                    <>
                        {
                            currentProjects.length > 0 ?
                                <div>
                                    {currentProjects.map(project =>
                                        <p key={project}>
                                            <Link to={{
                                                pathname: `/projects/${project}/`,
                                                fromDashboard: false
                                            }}
                                                className='for-all-links'>
                                                {projects.filter(e => e.id == project)[0].name}
                                            </Link>
                                        </p>)}
                                </div>
                                : <>no current projects</>
                        }
                    </>
                    :
                    <Loader />
            }
        </>
    )
}

export default QACurrentProjects;