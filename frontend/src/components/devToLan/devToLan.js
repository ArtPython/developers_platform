import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllDevToLan } from "../../redux/actions/async/fetchAllDevToLan";
import Loader from "../general/additional/loader";


function DevToLan() {

/*     const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllDevToLan())
    }, [])
 */

    const all_dev_to_lan = useSelector(state => state.DevToLanReducer.dev_to_lan)



    return (
        <div>
            <h1>DevToLanguage</h1>
            {all_dev_to_lan.length}
            {all_dev_to_lan.length > 0 ?
                <div>
                    {all_dev_to_lan.map(e => (
                        <div>
                            <Link
                                to={{
                                    pathname: `/dev-to-lan/${e.id}/`,
                                    fromDashboard: false
                                }}>
                                <hr />
                                <h2>{e.id}</h2>
                                <h3>{e.developer}...{e.language}</h3>
                                <hr />
                            </Link>
                        </div>
                    ))}
                </div>
                : <Loader />}
        </div>
    )
}

export default DevToLan;