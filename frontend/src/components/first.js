import DevelopersComponent from "./developers/developers";
import ProjectsComponent from "./projects/projects";
import TasksComponent from "./tasks/tasks";

function FirstComponent () {
    return(
        <div>
            <DevelopersComponent />
            <ProjectsComponent />
            <TasksComponent />
        </div>
    )
}

export default FirstComponent;