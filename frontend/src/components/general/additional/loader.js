import React from "react";
import "./../../../css/general/loader.css"


const Loader = () =>
    <div style={{ width:10,heigth:10 }} class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
export default Loader;