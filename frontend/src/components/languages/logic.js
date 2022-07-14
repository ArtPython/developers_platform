import UpdateLanguage from "./updateLanguage";
import "./../../css/languages/languageDetail.css"
import FrameworksForLanguage from "./frameworksForLang";
import DevelopersForLanguage from "./developersForLang";
import ProjectsForLanguage from "./projectsForLanguage";

function Logic({ match }) {

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
            {language}
            {developers}
            {frameworks}
        </div>
    )
}
export default Logic;