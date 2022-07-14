import React, { useState } from "react";
import PastDeveloperTeam from "./pastDeveloperTeam";
import PastManagerTeam from "./pastManagerTeam";
import PastQATeam from "./pastQATeam";

function PastTeam({ developers, managers, qas }) {
    const [showPastTeam, setShowPastTeam] = useState({ isOpen: false })

    return (
        <div>
            <React.Fragment>
                <button onClick={() => setShowPastTeam({ isOpen: !showPastTeam.isOpen })}>
                    {showPastTeam.isOpen ? "close" : "open"}
                </button>
                {showPastTeam.isOpen &&
                    <div>
                        <PastDeveloperTeam developers={developers} />
                        <PastManagerTeam managers={managers} />
                        <PastQATeam qas={qas} />
                    </div>
                }
            </React.Fragment>
        </div>
    )
}

export default PastTeam;