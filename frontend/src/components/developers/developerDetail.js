import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";
import DoneProjects from "./doneProjects";
import './../../css/developers/developerDetail.css';
import CurrentProjects from "./current_projects";
import InNumbers from "./inNumbers";
import DevsLanguagesAndFrameworks from "./devsLansFrames";
import DevToProForDev from "./devToPro";
import EnglishLevel from "./englishLevel";
import DevTasks from "./devTasks/devTasks";

function DeveloperDetail({ match }) {

    const id = match.params.id;
    const [developer, setDeveloper] = useState({});
    const [fr, setFr] = useState([])


    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/developers/${id}/`,
        }).then(response => {
            setDeveloper(response.data)
            setFr(response.data.technologies[0].frameworks)
            console.log(response.data.fr_and_lan[0].frameworks)
        })
    }, [id])


    return (
        <div>
            {developer && developer.done_pr && developer.current_pr ?
                <div>
                    <div className='developer-main-container'>
                        <p>
                            <img src={developer.photo} className='photo-container' />
                        </p>
                        <InNumbers developer={developer} />
                    </div>
                    <div className='developer-small-container'>
                        <DoneProjects developer={developer} />
                        <h>
                            <Link to={{
                                pathname: `/${developer.role}/`,
                                fromDashboard: false
                            }}>
                                {developer.role}
                            </Link>
                        </h>
                        <h>skill is {developer.skill}</h>
                    </div>
                    <div className='additional-dveloper-container'>
                        <CurrentProjects developer={developer} />
                        <DevTasks developer={developer} />
                        <EnglishLevel level={developer.english_level} />
                    </div>
                    <DevsLanguagesAndFrameworks developer={developer} />
                    <div>
                        <h1>leave a comment</h1>
                    </div>
                    {/*                     <div className='additional-dveloper-container'>
                        <DevToProForDev developer={developer} />
                    </div> */}
                </div>
                : <Loader />
            }
        </div>
    )
}

export default DeveloperDetail;