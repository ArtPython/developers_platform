import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";

function BasicComponent({tasks, status}) {

    return (
        <div>
            <h1>This is a {status} component</h1>
            {tasks.length > 0 ?
                <div>
                    <p>{tasks.length}</p>
                    {tasks.map(task =>
                        <p key={task.id}>
                            <Link to={{
                                pathname: `/tasks/${task.id}/`,
                                fromDashboard: false
                            }}
                                className='for-all-links'>
                                {task.name}...{
                                    task.progress ? <>&#9203;</> :
                                        <>
                                            {task.status == 'open' ? <>&#10060;</> : <>&#9989;</>}
                                        </>
                                }
                            </Link>
                        </p>)}
                </div>
                : <Loader />
            }
        </div>
    )
}

export default BasicComponent;