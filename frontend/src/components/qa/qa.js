import React, { useState } from "react"
import { Link } from "react-router-dom";
import Loader from "../general/additional/loader";
import "./../../css/developers/developers.css"
import { useSelector } from 'react-redux';


function QAComponent() {

    const [show, setShow] = useState({isOpen:true})

    const all_qa = useSelector(state => state.QAReducer.qas)

    return (
        <div>
            <h1>This is a qa component</h1>
            <h2><Link to={{
                pathname: `/qa-table/`,
                fromDashboard: false
            }}>to the qa table</Link></h2>
            <div>
                {all_qa.length > 0 ?
                    <React.Fragment>
                        <button onClick={() => { setShow({ isOpen: !show.isOpen }) }}>
                            {show.isOpen ? "close" : "open"}
                        </button>
                        {show.isOpen &&
                            <div className="developers-container">
                                {all_qa.map(developer =>
                                    <div key={developer.id}>
                                        <Link
                                            to={{
                                                pathname: `/qa/${developer.id}/`,
                                                fromDashboard: false
                                            }}>
                                            {developer.name}
                                        </Link>
                                    </div>
                                )}
                                <button onClick={() => { setShow({ isOpen: false }) }}>
                                    close
                                </button>
                            </div>
                        }
                    </React.Fragment>
                    :
                    <Loader />}
            </div>
        </div>
    )
}

export default QAComponent;