import React, { useState } from "react";
import Loader from "../../general/additional/loader";
import CurrentDeveloperTeam from "./currentDeveloperTeam";
import CurrentManagerTeam from "./currentManagerTeam";
import CurrentQATeam from "./currentQATeam";

function CurrentTeam({ developers, managers, qas }) {
    const [showCurrentTeam, setShowCurrentTeam] = useState({ isOpen: true })

    return (
        <div>
            {developers && managers && qas ?
                <React.Fragment>
                    <button onClick={() => setShowCurrentTeam({ isOpen: !showCurrentTeam.isOpen })}>
                        {showCurrentTeam.isOpen ? "close" : "current team"}
                    </button>
                    {showCurrentTeam.isOpen &&
                        <div>
                            <CurrentDeveloperTeam developers={developers} />
                            <CurrentManagerTeam managers={managers} />
                            <CurrentQATeam qas={qas} />
                        </div>
                    }
                </React.Fragment>
                :
                <Loader />}
        </div>
    )
}

export default CurrentTeam;