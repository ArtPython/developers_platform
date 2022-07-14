import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";


function FrameworkProject({ developers }) {

    const [show, setShow] = useState({ isOpen: true })

    return (
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
                                            <div key={developer.id}>
                                                <Link to={{
                                                    pathname: `/developers/${developer.id}/`,
                                                    fromDashboard: false
                                                }}
                                                    className='for-all-links'>
                                                    {developer.name}
                                                </Link>
                                            </div>)}
                                    </div>
                                </>}
                        </React.Fragment>
                        : <></>
                }
            </p>
        </>
    )
}

export default FrameworkProject;