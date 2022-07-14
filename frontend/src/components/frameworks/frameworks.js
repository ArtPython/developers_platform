import React from "react"
import Loader from "../general/additional/loader";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function FrameworksComponent() {

     const frameworks = useSelector(state => state.FrameworksReducer.frameworks)

    return (
        <div>
            <h1>This is a frameworks component</h1>
            <div>
                {frameworks.length > 0 ?
                    <>
                        {/* <LanguageNestedComponent languages={languages} /> */}
                        <div>
                            {frameworks.map(framework =>
                                <div key={framework.id} className='for-one-language-container' > {/* className='col-md-1 col-5' */}
                                    <div className='nested-for-one-language-container'>
                                        <Link
                                            to={{
                                                pathname: `/frameworks/${framework.id}/`,
                                                fromDashboard: false
                                            }}
                                            className='for-all-links'>
                                            {framework.name}
                                            <img src={framework.photo} style={{ width: 50, height: 50 }} />
                                        </Link>
                                    </div>
                                </div>)}
                        </div>
                    </>
                    :
                    <Loader />
                }
            </div>
        </div>
    )
}

export default FrameworksComponent;