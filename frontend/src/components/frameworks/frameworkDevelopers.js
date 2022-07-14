import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Loader from "../general/additional/loader";


function FrameworkDevelopers({ developers }) {

    const [show, setShow] = useState({ isOpen: true })
    const all_developers = useSelector(state => state.DevelopersReducer.developers)

    return (
        <>
            {all_developers.length > 0 ?
                <>
                    <h2>developers - {developers.length}</h2>
                    <p>
                        {
                            developers.length > 0 ?
                                <React.Fragment>
                                    <p>
                                        <button onClick={() =>
                                            setShow({ isOpen: !show.isOpen })}>
                                            {show.isOpen ? "close" : "open"}
                                        </button>
                                    </p>
                                    {show.isOpen &&
                                        <>
                                            <div>
                                                {developers.map(developer =>
                                                    <div key={developer}>
                                                        <Link to={{
                                                            pathname: `/developers/${developer}/`,
                                                            fromDashboard: false
                                                        }}
                                                            className='for-all-links'>
                                                            {all_developers.filter(dev => dev.id == developer)[0].name}
                                                        </Link>
                                                    </div>)}
                                            </div>
                                        </>}
                                </React.Fragment>
                                : <></>
                        }
                    </p>
                </>
                : <Loader />
            }
        </>
    )
}

export default FrameworkDevelopers;