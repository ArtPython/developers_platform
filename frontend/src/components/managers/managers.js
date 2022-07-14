import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./../../css/developers/developers.css"
import { useSelector } from "react-redux";


function ManagersComponent(){

    const [showManagers, setShowManagers] = useState({ isOpen: true })

    const managers = useSelector(state => state.ManagersReducer.managers)
    
    return (
        <div>
            <h1>This is a managers component</h1>
            <div>
                {managers.length > 0 ?
                    <React.Fragment>
                        <button onClick={() => { setShowManagers({ isOpen: !showManagers.isOpen }) }}>
                            {showManagers.isOpen ? "close" : "open"}
                        </button>
                        {showManagers.isOpen &&
                            <div className="developers-container">
                                {managers.map(developer =>
                                    <div key={developer.id}>
                                        <Link
                                            to={{
                                                pathname: `/managers/${developer.id}/`,
                                                fromDashboard: false
                                            }}>
                                            {developer.name}
                                        </Link>
                                    </div>
                                )}
                                <button onClick={() => { setShowManagers({ isOpen: false }) }}>
                                    close
                                </button>
                            </div>
                        }
                    </React.Fragment>
                    :
                    <h2>need add someone</h2>}
            </div>
           {/*  <AddDeveloper /> */}
        </div>
    )
}

export default ManagersComponent;