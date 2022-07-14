import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TaskQA({ task }) {
    const one_qa = useSelector(state => state.QAReducer.qas).filter(
        qa=> qa.id == task.qa
    )

    return (
        <>
          {
                one_qa.length > 0 ?
                    <p>
                        <Link to={{
                            pathname: `/developers/${task.qa}/`,
                            fromDashboard: false
                        }}
                            className='for-all-links'>
                            {one_qa[0].name}
                        </Link>
                        {task.status == 'open' ?
                            <> working on this task</> :
                            <> finished this task
                                {task.on_time ?
                                    <> on time</>
                                    : <> not on time</>}
                            </>}
                    </p>
                    :<>no one qa took this task yet</>
            }
        </>
    )
}

export default TaskQA;