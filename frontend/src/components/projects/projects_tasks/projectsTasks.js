import Loader from "../../general/additional/loader";
import CurrentTasks from "./currentTasks";
import DoneTasks from "./doneTasks";

function ProjectsTasks({ currentTasks, doneTasks }) {
    return (
        <>
            <CurrentTasks currentTasks={currentTasks} />
            <DoneTasks doneTasks={doneTasks} />
        </>
    )
}

export default ProjectsTasks;