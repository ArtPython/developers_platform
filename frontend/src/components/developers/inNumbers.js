import React from "react";
import './../../css/developers/inNumbers.css';

function InNumbers({ developer }) {
    return (
        <div className='nums-main-container'>
            <ul>
                <li>{developer.name}</li>
                <li>id is {developer.id}</li>
                <li>expirience - {developer.working[0]} years and {developer.working[1]} months</li>
                <li>work since {developer.work_since}</li>
                <li>current projects - {developer.current_pr.length} amount</li>
                <li>finished projects - {developer.done_pr.length} amount</li>
                <li>languages - {developer.stack.length} amount</li>
                <li>frameworks - {developer.frameworks.length} amount</li>
                <li>tasks - {developer.tasks.length} amount</li>
            </ul>
        </div>
    )
}

export default InNumbers;