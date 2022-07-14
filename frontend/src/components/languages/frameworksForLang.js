import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";

function FrameworksForLanguage({ frameworks }) {

    const all_frameworks = useSelector(state => state.FrameworksReducer.frameworks)

    return (
        <>
            {all_frameworks.length > 0 ?
                <>
                    <h1>frameworks:</h1>
                    {
                        frameworks.length > 0 ?
                            <div>
                                {frameworks.map(framework =>
                                    <div key={framework}>
                                        <Link to={{
                                            pathname: `/frameworks/${framework}/`,
                                            fromDashboard: false
                                        }}>
                                            {all_frameworks.filter(fr => fr.id == framework)[0].name}
                                        </Link>
                                        <img src={all_frameworks.filter(e => e.id == framework)[0].photo}
                                            style={{ width: 80, heigth: 80 }} />
                                    </div>)}
                            </div>
                            : <p>need add framework</p>
                    }
                </>
                : <Loader />}
        </>
    )
}

export default FrameworksForLanguage;