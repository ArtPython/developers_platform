import { Link } from "react-router-dom";
import DeleteLanguage from "./deleteLanguage";
import './../../css/languages/languages.css';
import Loader from "../general/additional/loader";

function LanguageNestedComponent({ language }) {
    return (
        <>
            {
                language ?
                    <p>
                        <Link
                            to={{
                                pathname: `/languages/${language.id}/`,
                                fromDashboard: false
                            }
                            }
                            className='for-all-links' >
                            {language.name}
                            < img src={language.photo} style={{ width: 50, height: 50 }
                            } />
                        </Link >
                    </p>
                    : <Loader />}
        </>
    )
}

export default LanguageNestedComponent;