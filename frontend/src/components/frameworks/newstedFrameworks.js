import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Loader from "../general/additional/loader";

function NestedFrameworks({ language, id }) {

    const [show, setShow] = useState({ isOpen: true })
    const all_frameworks = useSelector(state => state.FrameworksReducer.frameworks).filter(fr => fr.language == language)
    const all_languages = useSelector(state => state.LanguagesReducer.languages).filter(lang => lang.id == language)


    return (
        <div className='nested-another-frameworks'>
            {all_frameworks.length > 0 && all_languages.length > 0 ?
                <React.Fragment>
                    <p>another {all_languages[0].name} frameworks</p>
                    <p>
                        <button onClick={() =>
                            setShow({ isOpen: !show.isOpen })}>
                            {show.isOpen ? "close" : "open"}
                        </button>
                    </p>
                    {show.isOpen &&
                        <>
                        {all_frameworks.filter(fr => fr.id != id).length > 0 ?
                            <>
                                {all_frameworks.filter(fr => fr.id != id).map(framework =>
                                    <p>
                                        <Link to={{
                                            pathname: `/frameworks/${framework.id}/`,
                                            fromDashboard: false
                                        }}
                                            className='for-all-links'>
                                            {framework.name}
                                        </Link>
                                        <img
                                            src={framework.photo}
                                            style={{ width: 50, heigth: 50 }} />
                                    </p>)}
                            </>
                            :<p>this is only one framework for this language</p>}
                        </>}
                </React.Fragment>
                : <Loader />
            }
        </div >
    )
}

export default NestedFrameworks;