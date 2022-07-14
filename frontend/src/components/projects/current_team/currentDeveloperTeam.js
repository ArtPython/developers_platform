import { Link } from "react-router-dom";

function CurrentDeveloperTeam({ developers }) {
    return(
        <div>
        <h2>current:</h2>
        {
            developers.length > 0 ?
                <div>
                    {
                        developers.map(
                            developer =>
                                <div>
                                    <Link to={{
                                        pathname: `/developers/${developer.id}/`,
                                        fromDashboard: false
                                    }}>
                                        {developer.name}...
                                        {developer.id}
                                    </Link>
                                                </div>
                        )
                    }
                </div>
                : <>no devs on the project</>
        }
        </div>
    )
}

export default CurrentDeveloperTeam;
