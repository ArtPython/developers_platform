import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../general/additional/loader";
import DevCurrentTasks from "./developerCurrentTasks";
import DevDoneTasks from "./developersDoneTasks";

function DevTasks({ developer }) {
    const [show, setShow] = useState({ isOpen: true })

    const tasks = useSelector(state => state.TasksReducer.tasks)

    return (
        <div>
            {developer && tasks.length > 0 ?
                <React.Fragment>
                    <button onClick={() => { setShow({ isOpen: !show.isOpen }) }}>
                        {show.isOpen ? 'show done tasks' : 'show current tasks'}
                    </button>
                    {show.isOpen ?
                        <DevCurrentTasks developer={developer} tasks={tasks} />
                        :
                        <DevDoneTasks developer={developer} tasks={tasks}/>
                    }
                </React.Fragment>
                : <Loader />}
        </div>
    )
}

export default DevTasks;