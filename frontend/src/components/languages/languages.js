import React from "react"
import Loader from "../general/additional/loader";
import { useSelector } from 'react-redux';
import AddLanguage from "./addLanguage";
import { Link } from "react-router-dom";

function LanguagesComponent() {

     const languages = useSelector(state => state.LanguagesReducer.languages)

    return (
        <div>
            <h1>This is a languages component</h1>
            <div>
                {languages.length > 0 ?
                    <>
                        {/* <LanguageNestedComponent languages={languages} /> */}
                        <div>
                            {languages.map(language =>
                                <div key={language.id} className='for-one-language-container' > {/* className='col-md-1 col-5' */}
                                    <div className='nested-for-one-language-container'>
                                        <Link
                                            to={{
                                                pathname: `/languages/${language.id}/`,
                                                fromDashboard: false
                                            }}
                                            className='for-all-links'>
                                            {language.name}
                                            <img src={language.photo} style={{ width: 50, height: 50 }} />
                                        </Link>
                                        {/* <DeleteLanguage id={language.id} /> */}
                                    </div>
                                </div>)}
                        </div>
                    </>
                    :
                    <Loader />
                }
                <AddLanguage />
            </div>
        </div>
    )
}

export default LanguagesComponent;