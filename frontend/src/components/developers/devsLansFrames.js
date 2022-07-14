import React from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import './../../css/developers/devsLansFrame.css';
import SimpleFrameworksEst from "./simple";
import SimpleLanguagesEst from "./simpleLan";


function DevsLanguagesAndFrameworks({ developer }) {


    const all_languages = useSelector(state => state.LanguagesReducer.languages)
    const all_frameworks = useSelector(state => state.FrameworksReducer.frameworks)
    const all_dev_to_lan = useSelector(state => state.DevToLanReducer.dev_to_lan).filter(
        e => e.developer == developer.id
    )
    const all_dev_to_fr = useSelector(state => state.DevToFrReducer.dev_to_fr).filter(
        e => e.developer == developer.id
    )

    const [show, setShow] = useState({ isOpen: true })

    return (

        <div className='lang-frame-container'>
            <React.Fragment>
                <button onClick={() => setShow({ isOpen: !show.isOpen })}>{show.isOpen ? 'close' : 'open'}</button>
                {show.isOpen &&
                    <>
                        {
                            developer.technologies.length > 0 && all_languages.length > 0 && all_frameworks.length > 0 ?
                                <>
                                    <p>techhologies</p>
                                    {developer.technologies.map(language =>
                                        <p key={language.language} className='nested-lang-frame-container '>
                                            <p>
                                                <div className='photo-name-lang-container'>
                                                    <Link
                                                        to={{
                                                            pathname: `/languages/${language.language}/`,
                                                            fromDashboard: false
                                                        }}
                                                        className='for-all-links'>
                                                        <img src={all_languages.filter(e => e.id == language.language)[0].photo} className='for-lan-img-container' />
                                                    </Link>
                                                    <p className='nested-p'>
                                                        <h onClick={() => { alert(`${language} programing language`) }}>
                                                            {all_languages.filter(e => e.id == language.language)[0].name}
                                                             ({all_languages.filter(e => e.id == language.language)[0].purpose})
                                                        </h>
                                                        {
                                                            all_dev_to_lan.length > 0 ?
                                                                <SimpleLanguagesEst smt={all_dev_to_lan.filter(e => e.language == language.language)} />
                                                                : <></>
                                                        }
                                                    </p>
                                                </div>
                                            </p>
                                            <p className='nested-frameworks-container'>
                                                {language.frameworks.map(framework =>
                                                    <div>
                                                        <p key={framework} className='lans-frames-together'>

                                                            <Link to={{
                                                                pathname: `/frameworks/${framework}/`,
                                                                fromDashboard: false
                                                            }}
                                                                className='for-all-links'>
                                                                <img src={all_frameworks.filter(e => e.id == framework)[0].photo}
                                                                    className='for-lan-img-container' />
                                                            </Link>
                                                            <p style={{ paddingTop: 30 }}>
                                                                <p>{all_frameworks.filter(e => e.id == framework)[0].name}</p>
                                                                <p>expirience
                                                                    {
                                                                        all_dev_to_fr.length > 0 ?
                                                                            <SimpleFrameworksEst smt={all_dev_to_fr.filter(e => e.framework == framework)} />
                                                                            : <></>
                                                                    }
                                                                </p>
                                                            </p>
                                                        </p>
                                                        <br />
                                                    </div>)}
                                            </p>
                                        </p>
                                    )}
                                </> : <>no stack</>
                        }</>
                }
            </React.Fragment>
        </div>
    )
}

export default DevsLanguagesAndFrameworks;