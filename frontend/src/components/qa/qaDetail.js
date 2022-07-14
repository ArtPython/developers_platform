import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../general/additional/loader";
import QACurrentProjects from "./qaCurrentProjects";


function QADetail({ match }) {

    const id = match.params.id;
    const one_qa = useSelector(state => state.QAReducer.qas).filter(e=>e.id==id)

    return (
        <div>
            {
                one_qa.length > 0 ?
                <>
                    <p>{one_qa[0].name}</p>
                    <p>id is {one_qa[0].id}</p>
                    <p>skill is {one_qa[0].skill}</p>
{/*                     <QACurrentProjects currentProjects={one_qa[0].current_pr} />
 */}                
{/*                     <p>{one_qa[0].current_pr.length > 0 ? <>asdasdasd</> : <>!!!</>}</p>
 */}    </>
                :<Loader />
            }
        </div>
    )
}

export default QADetail;