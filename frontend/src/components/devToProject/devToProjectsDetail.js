import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";
import AddDevToPro from "./devToProAdd";
import UpdateDevToPro from "./devToProUpdate";

function DevToProrDetail({ match }) {

    const id = match.params.id;
    const [devToPro, setDevToPro] = useState({});

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/dev-to-project/${id}/`,
        }).then(response => {
            setDevToPro(response.data)
        })
    }, [id])

    const developer = useSelector(state => state.DevelopersReducer.developers).filter(e=>e.id == devToPro.developer)

    /*  const languages = useSelector(state => state.LanguagesReducer.languages)
 
     const dispatch = useDispatch();
 
     useEffect(() => {
         dispatch(fetchAllProjects())
     }, [])
 
     const projects = useSelector(state => state.ProjectsReducer.projects) */

    return (
        <div>
            {devToPro ?
                <div>
                    <h2>id is ... {devToPro.id}</h2>
                    <h2>project is ... {devToPro.project}</h2>
                    <h2>developer is ... {devToPro.developer}</h2>
                    <h2>{devToPro.stats}</h2>
                    {devToPro.stats ?
                        <h2>still on project</h2> :
                        <h2>was on project</h2>}
                </div>
                : <Loader />
            }
        </div>
    )
}

export default DevToProrDetail;