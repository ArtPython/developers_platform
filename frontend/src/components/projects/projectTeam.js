import React, { useState } from "react";

function ProjectTeam({ project }) {

    const [show, setShow] = useState({ isOpen: true })

    return (
        <div>
            {project ?
                <React.Fragment>
                    <button onClick={() => setShow({ isOpen: !show.isOpen })}>
                        {show.isOpen ? "close" : "squad"}
                    </button>
                    {show.isOpen &&
                        <div>
                            squad:
                            <h3>full-stack: {project.fullstack}</h3>
                            <h3>backend: {project.backend}</h3>
                            <h3>frontend: {project.frontend}</h3>
                        </div>}
                </React.Fragment>
                : <>no info</>}
        </div>
    )
}

export default ProjectTeam;