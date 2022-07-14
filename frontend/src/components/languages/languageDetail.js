import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Loader from "../general/additional/loader";
import DeleteLanguage from "./deleteLanguage";
import UpdateLanguage from "./updateLanguage";
import "./../../css/languages/languageDetail.css"
import FrameworksForLanguage from "./frameworksForLang";
import DevelopersForLanguage from "./developersForLang";
import ProjectsForLanguage from "./projectsForLanguage";

function LanguageDetail({ match }) {

    const id = match.params.id;
    const [language, setLanguage] = useState({});
    const [developers, setDevelopers] = useState([])
    const [frameworks, setFrameworks] = useState([])




    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/languages/${id}/`,
        }).then(response => {
            setLanguage(response.data)
            setDevelopers(response.data.developers)
            setFrameworks(response.data.frameworks)
        })
    }, [id])



    return (
        <div>
            {language && language.projects ?
                <div>
                    <h1>{language.name} details!</h1>
                    <h2>{language.name}</h2>
                    {language.photo ?
                        <img src={language.photo} style={{ width: 250, heigth: 250 }} />
                        : <>no photo</>}
                    <div>
                        <div className="nested-container">
                            <DevelopersForLanguage developers={developers} />
                        </div>
                        <div className="nested-container">
                            <FrameworksForLanguage frameworks={frameworks} />
                        </div>
                    </div>
                    <div className="nested-container">
                        <ProjectsForLanguage projects={language.projects} />
                    </div>
                    <UpdateLanguage language={language} />
                    <DeleteLanguage id={id} />
                </div>
                : <Loader />
            }
        </div>
    )
}

export default LanguageDetail;
