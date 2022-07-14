import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";


function SimpleForm() {
    const [state, setState] = React.useState({
        gender: false,
        love: false
    });

    const handleToggle = ({ target }) =>
        setState(s => ({ ...s, [target.name]: !s[target.name] }));

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://127.0.0.1:8000/languages/`,
        }).then(response => {
            setLanguages(response.data)
        })
    }, [])


    return (
        <div>
            <h1>hello checkbox</h1>
            {languages.length > 0 ?
                <div>
                    {languages.map(language => (
                        <div>
                            <input
                                type="checkbox"
                                placeholder="lol"
                                onChange={handleToggle}
                                key={language}
                                name={language}
/*                             checked={state[id]}
 */                        />
                            <p>{language.name}</p>
                        </div>

                    ))}
                </div>
                : <>no one</>}
        </div>
    );
}

export default SimpleForm;