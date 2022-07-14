import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";


function DevToFr() {



    const all_dev_to_fr = useSelector(state => state.DevToFrReducer.dev_to_fr)



    return (
        <div>
            <h1>DevToFramework</h1>
            {all_dev_to_fr.length}
            {all_dev_to_fr.length > 0 ?
                <div>
                    {all_dev_to_fr.map(e => (
                        <div>
                            <Link
                                to={{
                                    pathname: `/dev-to-lan/${e.id}/`,
                                    fromDashboard: false
                                }}>
                                <hr />
                                <h2>{e.id}</h2>
                                <h3>{e.developer}...{e.framework}</h3>
                                <hr />
                            </Link>
                        </div>
                    ))}
                </div>
                : <Loader />}
        </div>
    )
}

export default DevToFr;