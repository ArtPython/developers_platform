import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TaskManager({ task }) {
    const one_manager = useSelector(state => state.ManagersReducer.managers).filter(
        manager=> manager.id == task.managers
    )

    return (
        <>
         {
                one_manager.length > 0 ?
                    <p>
                        <Link to={{
                            pathname: `/developers/${task.managers}/`,
                            fromDashboard: false
                        }}
                            className='for-all-links'>
                            {one_manager[0].name}
                        </Link>
                        {task.status == 'open' ?
                            <> working on this task</> :
                            <> finished this task
                                {task.on_time ?
                                    <> on time</>
                                    : <> not on time</>}
                            </>}
                    </p>
                    :<>no one manager took this task yet</>
            }
        </>
    )
}

export default TaskManager;