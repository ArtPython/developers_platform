import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../general/additional/loader";
import BasicComponent from "./basicTasks";

function TasksComponent() {

    /* const [show, setShow] = useState({ isOpen: true })

    const tasks = useSelector(state => state.TasksReducer.tasks)

    const free_tasks = useSelector(state => state.TasksReducer.tasks).filter(
        task => task.status == 'open'
    ).filter(
        task => task.developers.length == 0 &&
            task.managers.length == 0 &&
            task.qa.length == 0
    ) */
    return (
        <>
        Tasks component
            {/* <div>
                <React.Fragment>
                    <button onClick={() => { setShow({ isOpen: !show.isOpen }) }}>
                        {show.isOpen ? 'show free tasks' : 'show all tasks'}
                    </button>
                    {show.isOpen ?
                        <>
                            {tasks.length > 0 && free_tasks ?
                                <BasicComponent tasks={tasks} status={'all tasks'} />
                                : <Loader />
                            }
                        </>
                        :
                        <>
                            {tasks.length > 0 && free_tasks ?
                                <BasicComponent tasks={free_tasks} status={'free tasks'} />
                                : <Loader />
                            }
                        </>
                    }
                </React.Fragment>
            </div> */}
        </>
    )
}

export default TasksComponent;