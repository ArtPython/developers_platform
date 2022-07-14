import React, { useEffect, useState } from "react"
import { memo } from "react";
import { Link } from "react-router-dom";
import { fetchAllDevelopers } from "../../redux/actions/async/fetchAllDevelopers";
import Loader from "../general/additional/loader";
import "./../../css/developers/developers.css"
import AddDeveloper from "./addDeveloper";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { getParticularDeveloper } from "../../redux/actions/actions";
import { fetchOne } from "../../redux/actions/async/fetchOne";
import LoaderInProgress from "../general/additional/loaderInProgress";


function DevelopersComponent() {

    const [showDevelopers, setShowDevelopers] = useState({ isOpen: true })

    /*     const dispatch = useDispatch();
    
        useEffect(() => {
            dispatch(fetchOne(10))
        }, [])
    
        const developersz = useSelector(state => state.DevelopersReducer.developers) */

    const [developers, setDevelopers] = useState([]);



    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/developers/`,
        }).then(response => {
            setDevelopers(response.data)
        })
    }, [])



    return (
        <div>
            <h1>This is a developers component</h1>
            <h2>
                <Link to={{
                    pathname: `/developers-table/`,
                    fromDashboard: false
                }}
                    className='for-all-links'>
                    to the developers table
                </Link>
            </h2>
            <div>
                {developers.length > 0 ?
                    <React.Fragment>
                        <button onClick={() => { setShowDevelopers({ isOpen: !showDevelopers.isOpen }) }}>
                            {showDevelopers.isOpen ? "close" : "open"}
                        </button>
                        {showDevelopers.isOpen &&
                            <div className="developers-container">
                                {developers.map(developer =>
                                    <div key={developer.id}>
                                        <Link
                                            to={{
                                                pathname: `/developers/${developer.id}/`,
                                                fromDashboard: false
                                            }}
                                            className='for-all-links'>
                                            {developer.name}
                                            <>
                                                <>{developer.free_status ? <>&#9989;</> : <>&#10060;</>}</>
                                            </>
                                        </Link>
                                    </div>
                                )}
                                <button onClick={() => { setShowDevelopers({ isOpen: false }) }}>
                                    close
                                </button>
                            </div>
                        }
                        {/*                         <h1>{developersz[0].id}</h1> */}
                    </React.Fragment>
                    :
                    <h2>need add someone</h2>}
            </div>
            <AddDeveloper />
            <LoaderInProgress />
        </div>
    )
}

export default DevelopersComponent;