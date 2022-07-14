import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../general/additional/loader";
import AddDevToPro from "./devToProAdd";


function DevToProjectComponent() {

    const [show, setShow] = useState({ isOpen: true })

    const [developers, setDevelopers] = useState([]);

    const [status, setStatus] = useState(null);



    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/dev-to-project/`,
        }).then(response => {
            setDevelopers(response.data)
            setStatus(response.status)
        })
    }, [])



    return (
        <div>
            <h1>DevToProject</h1>
            {/* <React.Fragment>
                <button onClick={() => { setShow({ isOpen: !show.isOpen }) }}>
                    {show.isOpen ? 'close' : 'open'}
                </button>
                {show.isOpen && */}
            {status ?
                <>
                    {developers.length > 0 ?
                        <div>
                            {developers.map(e => (
                                <div>
                                    <Link
                                        to={{
                                            pathname: `/dev-to-project/${e.id}/`,
                                            fromDashboard: false
                                        }}>
                                        <hr />
                                        <h2>{e.id}</h2>
                                        <h3>{e.developer}...{e.project}</h3>
                                        <hr />
                                    </Link>
                                </div>
                            ))}
                        </div>
                        :
                        <>no dev to pr</>
                    }
                </>
                : <Loader />}
            <hr />
            <AddDevToPro />

            {/* }
            </React.Fragment> */}
        </div>
    )
}

export default DevToProjectComponent;