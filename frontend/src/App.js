import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/general/menu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DevelopersComponent from './components/developers/developers';
import ProjectsComponent from './components/projects/projects';
import TasksComponent from './components/tasks/tasks';
import About from './components/general/about';
import Home from './components/general/home';
import DeveloperDetail from './components/developers/developerDetail';
import ProjectDetail from './components/projects/projectDetail';
import LanguagesComponent from './components/languages/languages';
import LanguageDetail from './components/languages/languageDetail';
import SimpleForm from './components/projects/simpleForm';
import FrameworksComponent from './components/frameworks/frameworks';
import FramewrokDetail from './components/frameworks/frameworkDetail';
import { useDispatch } from 'react-redux';
import { fetchAllLanguages } from './redux/actions/async/fetchAllLanguages';
import { useEffect } from 'react';
import ManagersComponent from './components/managers/managers';
import ManagerDetail from './components/managers/detailManager';
import FullStack from './components/general/roles/fullStackDev';
import BackEnd from './components/general/roles/backEnd';
import FrontEnd from './components/general/roles/frontEnd';
import DevToProjectComponent from './components/devToProject/devToProject';
import DevToProrDetail from './components/devToProject/devToProjectsDetail';
import { fetchAllProjects } from './redux/actions/async/fetchAllProjects';
import { fetchAllManagers } from './redux/actions/async/fetchAllManagers';
import { fetchAllFrameworks } from './redux/actions/async/fetchAllFrameworks';
import { fetchAllQA } from './redux/actions/async/fetchAllQa';
import QAComponent from './components/qa/qa';
import { fetchAllDevToLan } from './redux/actions/async/fetchAllDevToLan';
import DevToLan from './components/devToLan/devToLan';
import { fetchAllDevToFr } from './redux/actions/async/fetchAllDevToFr';
import DevToFr from './components/devToFr/defToFr';
import { fetchAllTasks } from './redux/actions/async/fetchAllTasks';
import TaskDetail from './components/tasks/taskDetail';
import { fetchAllDevelopers } from './redux/actions/async/fetchAllDevelopers';
import QADetail from './components/qa/qaDetail';
import Tables from './components/tables/tables';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchAllLanguages())
      dispatch(fetchAllProjects())
      dispatch(fetchAllManagers())
      dispatch(fetchAllQA())
      dispatch(fetchAllFrameworks())
      dispatch(fetchAllDevToLan())
      dispatch(fetchAllDevToFr())
      dispatch(fetchAllTasks())
      dispatch(fetchAllDevelopers())
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/sf/' exact component={SimpleForm} />
        <Route path='/qa/' exact component={QAComponent} />
        <Route path='/qa/:id' exact component={QADetail} />
        <Route path='/developers/' exact component={DevelopersComponent} />
        <Route path='/managers/' exact component={ManagersComponent} />
        <Route path='/managers/:id' exact component={ManagerDetail} />
        <Route path='/languages/' exact component={LanguagesComponent} />
        <Route path='/languages/:id' exact component={LanguageDetail} />
        <Route path='/frameworks/' exact component={FrameworksComponent} />
        <Route path='/frameworks/:id' exact component={FramewrokDetail} />
        <Route path='/developers/:id' exact component={DeveloperDetail} />
        <Route path='/projects/' exact component={ProjectsComponent} />
        <Route path='/projects/:id' exact component={ProjectDetail} />
        <Route path='/tasks/' exact component={TasksComponent} />
        <Route path='/tasks/:id' exact component={TaskDetail} />
        <Route path='/about/' exact component={About} /> 
        <Route path='/dev-to-project/' exact component={DevToProjectComponent} />
        <Route path='/dev-to-project/:id' exact component={DevToProrDetail} />
        <Route path='/full-stack/' component={FullStack} />
        <Route path='/backend/' component={BackEnd} />
        <Route path='/dev-to-lan/' component={DevToLan} />
        <Route path='/dev-to-fr/' component={DevToFr} />
        <Route path='/frontend/' component={FrontEnd} />
        <Route path='/tables/' component={Tables} />
      </Router>
    </div>
  );
}

export default App;



  {/*       <Route path='/developers/:id' exact component={DevelopersComponent} />
*/}   