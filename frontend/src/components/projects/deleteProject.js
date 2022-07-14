import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



function DeleteProject({ id }) {


  const history = useHistory()

  const Delete = async (e) => {
    let formField = new FormData()
    await axios({
      method: 'delete',
      url: `http://127.0.0.1:8000/projects/${id}/`,
      data: formField,
/*       headers: {
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + String(authTokens.access)
      } */
    }).then(response => {
      console.log(response.data);
/*       history.push('/')
 */    })
 e.preventDefault()

  }

  return (
    <div>
        <button onClick={() => Delete()}>delete</button>
    </div>
  );
};

export default DeleteProject;