import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";


function ProjectsForLanguage({ projects }) {

    const all_projects = useSelector(state => state.ProjectsReducer.projects)

    return (
        <>
            {all_projects.length > 0 ?
                <>
                    <h1>this language use</h1>
                    {
                        projects.length > 0 ?
                            <div>
                                {projects.map(project =>
                                    <div key={project}>
                                        <Link to={{
                                            pathname: `/projects/${project}/`,
                                            fromDashboard: false
                                        }}>
                                            {all_projects.filter(pr=>pr.id==project)[0].name}
                                        </Link>
                                    </div>)}
                            </div>
                            : <p>need add developers</p>
                    }
                </>
                : <Loader />}
        </>
    )
}

export default ProjectsForLanguage;