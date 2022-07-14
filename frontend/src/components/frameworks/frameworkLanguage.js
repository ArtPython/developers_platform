import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NestedFrameworks from "./newstedFrameworks";

function FrameworkLanguage({ language, id }) {
    const all_languages = useSelector(state => state.LanguagesReducer.languages).filter(lang => lang.id == language)

    return (
        <>
            {language ?
                <>
                    <div className='nested-div-container'>
                        <div className='first-div'>
                            <Link to={{
                                pathname: `/languages/${language}/`,
                                fromDashboard: false
                            }}
                                className='for-all-links'>
                                <img src={all_languages[0].photo} style={{ width: 150, heigth: 150 }} />
                            </Link>
                        </div>
                        <div className='second-div-2'>
                            <h>{all_languages[0].name}</h>
                        </div>
                    </div>
                    <NestedFrameworks
                        id={id}
                        language={language} />
                </>
                : <></>}
        </>
    )
}

export default FrameworkLanguage;