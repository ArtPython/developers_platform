import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { DevelopersReducer } from "./reducers/developersReducer";
import { ProjectsReducer } from "./reducers/projectsReducer";
import { LanguagesReducer } from "./reducers/languagesReducer";
import { TasksReducer } from "./reducers/tasksReducer";
import { DevToReducer } from "./reducers/devToReducer";
import { ManagersReducer } from './reducers/managersReducer';
import { FrameworksReducer } from './reducers/frameworksReducer';
import { QAReducer } from "./reducers/qaReducer";
import { DevToLanReducer } from "./reducers/devToLanReducer";
import { DevToFrReducer } from "./reducers/devToFramework";

const rootReducer = combineReducers({
    routing: routerReducer,
    DevelopersReducer,
    ProjectsReducer,
    LanguagesReducer,
    DevToReducer,
    TasksReducer,
    ManagersReducer,
    FrameworksReducer,
    QAReducer,
    DevToLanReducer,
    DevToFrReducer
})

export default rootReducer;