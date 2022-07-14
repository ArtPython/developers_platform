import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";


function LanguageList() {

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
        languages 
    )
}

export default LanguageList;

