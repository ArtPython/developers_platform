import React from "react";
import { Link } from "react-router-dom";

function DevDoneTasks({ developer, tasks }) {

    return (
        <div>
            {developer.done_tasks.length > 0 ?
                <>
                    done tasks - {developer.done_tasks.length}
                    {developer.done_tasks.map(
                        task =>
                            <p>
                                <Link to={{
                                    pathname: `/tasks/${tasks.filter(e => e.id == task)[0].id}/`,
                                    fromDashboard: false
                                }}
                                    className='for-all-links'>
                                    {tasks.filter(e => e.id == task)[0].name}
                                </Link>
                            </p>
                    )}
                    {
                        developer.tasks_result ?
                            <p>% - {developer.tasks_result}</p>
                            : <p>no result yet</p>
                    }
                </>
                : <p>no done tasks yet</p>}
        </div>
    )
}

export default DevDoneTasks