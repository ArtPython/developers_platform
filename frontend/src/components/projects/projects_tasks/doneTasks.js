import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../general/additional/loader";

function DoneTasks({ doneTasks }) {
    const [show, setShow] = useState({ isOpen: false })
    const tasks = useSelector(state => state.TasksReducer.tasks)

    return (
        <>
            {
                tasks.length > 0 ?
                    <React.Fragment>
                        <button onClick={() => setShow({ isOpen: !show.isOpen })}>
                            {show.isOpen ? "close" : "done tasks"}
                        </button>
                        {
                            show.isOpen &&
                            <>
                                {
                                    doneTasks.length > 0 ?
                                        <div>
                                            {
                                                doneTasks.map(task =>
                                                    <p key={task}>
                                                        <Link
                                                            to={{
                                                                pathname: `/tasks/${task}/`,
                                                                fromDashboard: false
                                                            }}
                                                            className='for-all-links'>
                                                            {tasks.filter(e => e.id == task)[0].name}
                                                        </Link>
                                                        {tasks.filter(e =>
                                                            e.id == task
                                                        )[0].status == 'open' ? <>&#9989;</> : <>&#10060;</>}
                                                    </p>)
                                            }
                                        </div>
                                        : <Loader />
                                }
                            </>
                        }
                    </React.Fragment>
                    : <Loader />
            }
        </>
    )
}

export default DoneTasks;