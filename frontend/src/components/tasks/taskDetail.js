import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";
import TasksPurpose from "./tasksPurpose/tasksPurpose";

function TaskDetail({ match }) {

    const id = match.params.id;

    const tasks = useSelector(state => state.TasksReducer.tasks).filter(task => task.id == id)
    const projects = useSelector(state => state.ProjectsReducer.projects)
    return (
        <div>
            {projects.length > 0 && tasks.length > 0 ?
                <div>
                    <h1>{tasks[0].name}
                        <h onClick={() => {
                            tasks[0].progress ?
                                alert('this task in a progress') :
                                alert(`current status ${tasks[0].status}`)
                        }}>
                            {
                                tasks[0].progress ? <>&#9203;</> :
                                    <>
                                        {tasks[0].status == 'open' ? <>&#10060;</> : <>&#9989;</>}
                                    </>
                            }
                        </h>
                    </h1>
                    <h2>
                        <Link to={{
                            pathname: `/projects/${tasks[0].project}/`,
                            fromDashboard: false
                        }}
                            className='for-all-links'>
                            {projects.filter(
                                pr => pr.id == tasks[0].project
                            )[0].name}
                        </Link>
                    </h2>
                    <h2>this task for {tasks[0].purpose}</h2>
                    <h2>short description:</h2>
                    <h3>{tasks[0].about}</h3>
                    <TasksPurpose task={tasks[0]} />
                    <h5>id is {tasks[0].id}</h5>
                </div>
                : <Loader />
            }
        </div>
    )
}

export default TaskDetail;