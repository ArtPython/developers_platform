import { useSelector } from "react-redux";
import Loader from "../general/additional/loader";
import LanguageNestedComponent from "../languages/languageNestedComponent";

function ProjectLanComponent({ stack }) {
    const languages = useSelector(state => state.LanguagesReducer.languages)
    return (
        <>
        this project use:
            {stack.length > 0 && languages.length > 0 ?
                <>
                    {stack.map(lan =>
                        <LanguageNestedComponent language={languages.filter(e => e.id == lan)[0]} />
                    )}
                </>
                : <Loader />}
        </>
    )
}

export default ProjectLanComponent;