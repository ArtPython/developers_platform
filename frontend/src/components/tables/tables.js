import { useState } from "react";
import DeveloperTable from "./developersTable";
import FrameworksTable from "./frameworksTable";
import LanguagesTable from "./languagesTable";
import ProjectsTable from "./projectsTable";

function Tables() {
    const [developers, setDevelopers] = useState({ isOpen: false })
    const [languages, setLanguages] = useState({ isOpen: true })
    const [projects, setProjects] = useState({ isOpen: false })
    const [frameworks, setFrameworks] = useState({ isOpen: false })

    return (
        <>
        Tables component
          {/*   <button onClick={() => {
                setDevelopers({ isOpen: true });
                setLanguages({ isOpen: false });
                setProjects({ isOpen: false });
                setFrameworks({ isOpen: false });
            }}>
                show developers
            </button>
            <button onClick={() => {
                setDevelopers({ isOpen: false });
                setLanguages({ isOpen: true });
                setProjects({ isOpen: false });
                setFrameworks({ isOpen: false });
            }}>
                show languages
            </button>
            <button onClick={() => {
                setDevelopers({ isOpen: false });
                setLanguages({ isOpen: false });
                setProjects({ isOpen: true });
                setFrameworks({ isOpen: false });
            }}>
                show projects
            </button>
            <button onClick={() => {
                setDevelopers({ isOpen: false });
                setLanguages({ isOpen: false });
                setProjects({ isOpen: false });
                setFrameworks({ isOpen: true });
            }}>
                show frameworks
            </button>
            {developers.isOpen &&
                <DeveloperTable />
            }
            {languages.isOpen &&
                <LanguagesTable />
            }
            {projects.isOpen &&
                <ProjectsTable />
            }
            {frameworks.isOpen &&
                <FrameworksTable />
            } */}
        </>
    )
}

export default Tables;