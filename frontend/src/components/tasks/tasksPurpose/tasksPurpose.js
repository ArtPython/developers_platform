import TaskDeveloper from "./taskDeveloper";
import TaskManager from "./taskManager";
import TaskQA from "./taskQA";

function TasksPurpose({ task }) {
    return(
        <>
            {
                task.purpose=='developer' ? <TaskDeveloper task={task} />:
                task.purpose=='manager' ? <TaskManager task={task} /> :
                <TaskQA task={task} />
            }
        </>
    )
}

export default TasksPurpose;