import React from "react";
import { Link } from "react-router-dom";


function DevCurrentTasks({ developer, tasks }) {

    return (
        <div>
            {developer.current_tasks.length > 0 ?
                <>
                    <div style={{ backgroundColor: 'orange' }}>
                        current tasks - {developer.current_tasks.length}
                        {developer.current_tasks.map(
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
                    </div>
                </> :
                <>no current tasks</>}
        </div>
    )
}

export default DevCurrentTasks;