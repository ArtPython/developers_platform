import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";


function DevelopersForLanguage({ developers }) {

    const all_developers = useSelector(state => state.DevelopersReducer.developers)


    return (
        <>
            {all_developers.length > 0 ?
                <>
                    <h1>developers</h1>
                    {
                        developers.length > 0 ?
                            <div>
                                {developers.map(developer =>
                                    <div key={developer.id}>
                                        <Link
                                            key={developer.id}
                                            to={{
                                                pathname: `/developers/${developer}/`,
                                                fromDashboard: false
                                            }}>
                                            <p key={developer.id}>
                                                {all_developers.filter(dev =>
                                                    dev.id == developer)[0].name}
                                                {developer.name}
                                            </p>
                                        </Link>
                                    </div>)}
                            </div>
                            : <p>need add developers</p>
                    }
                </>
                : <Loader />}
        </>
    )
}

export default DevelopersForLanguage;