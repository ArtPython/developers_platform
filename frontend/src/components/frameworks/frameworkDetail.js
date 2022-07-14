import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import FrameworkDevelopers from "./frameworkDevelopers";
import './../../css/frameworks/frameworkDetail.css'
import FrameworkLanguage from "./frameworkLanguage";



function FrameworkDetail({ match }) {

    const id = match.params.id;
    const [framework, setFramework] = useState({});
    const [developers, setDevelopers] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/frameworks/${id}/`,
        }).then(response => {
            setFramework(response.data)
            setDevelopers(response.data.developers)
        })
    }, [id])

    return (
        <div className='main-div-here'>
            {framework ?
                <div>
                    <div className='nested-div-container'>
                        <div className='first-div'>
                            <img src={framework.photo} style={{ width: 350, heigth: 350 }} />
                        </div>
                        <div className='second-div'>
                            <h>{framework.name}!</h>
                        </div>
                    </div>
                    <FrameworkLanguage language={framework.language} id={id} />
                    <FrameworkDevelopers developers={developers} />
                </div>
                : <></>}
        </div>
    )
}

export default FrameworkDetail;
