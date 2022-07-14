import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TaskDeveloper({ task }) {
    const one_developer = useSelector(state => state.DevelopersReducer.developers).filter(
        developer => developer.id == task.developers
    )

    return (
        <>
            {
                one_developer.length > 0 ?
                    <p>
                        <Link to={{
                            pathname: `/developers/${task.developers}/`,
                            fromDashboard: false
                        }}
                            className='for-all-links'>
                            {one_developer[0].name}
                        </Link>
                        {task.past_developers ?
                            <>
                                {task.status == 'open' ?
                                    <> working on this task</> :
                                    <> finished this task
                                        {task.on_time ?
                                            <> on time</>
                                            : <> not on time</>}
                                    </>}
                            </>
                            : <> worked on this task but haven't finished it</>
                        }
                    </p>
                    : <>no one dev took this task yet</>
            }
        </>
    )
}

export default TaskDeveloper;