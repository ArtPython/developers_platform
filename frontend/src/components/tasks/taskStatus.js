function TaskStatus({ task }) {
    return (
        <>
            {task ?
                <h2>
                    {task.status == 'close' ?
                        <div>
                            {task.on_time ?
                                <>task was done on time</> :
                                <>task wasn't done on time...{task.on_time}</>}
                        </div>
                        :
                        <>
                          {task.progress ? 
                          <>dev is working on it</>
                        :
                        <>need dev to start</>}  
                        </>}
                </h2>
                : <></>
            }
        </>)
}
export default TaskStatus;