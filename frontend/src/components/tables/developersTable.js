import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './../../css/developers/developerDetail.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



function DeveloperTable() {

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/developers/')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);

/*     const defaultColDef = {
        sortable: true, editable: true, filter: true, floatingFilter: true, flex: 1
    } */
    const columnDefs = [
        {
            headerName: "name", field: "name",
        },
        {
            headerName: "skill", field: "skill",
        },
        {
            headerName: "id", field: "id",
        },
        {
            headerName: "expirience", field: "get_years",
        },
        {
            headerName: "get_whole_time", field: "get_whole_time",
        }
        /*  { headerName: "games", field: "games" },
         { headerName: "scored", field: "goals_scored" },
         { headerName: "missed", field: "goals_missed" },
         { headerName: "difference", field: "goals_difference", cellClass: (params) => (params.value > 0 ? "positive" : params.value < 0 ? "negative" : "no-games") },
         { headerName: 'points', field: 'points', cellClass: () => ("main-column") },
         { headerName: 'wins', field: 'wins' },
         { headerName: "wins_ot", field: "wins_ot" },
         { headerName: "defeats", field: "defeats" },
         { headerName: "defeats_ot", field: "defeats_ot" },
         {
             headerName: "wins %", field: "percentage_of_wins", cellRendererFramework: (params) => <div>
                 {params.value}%
             </div>
         }, */
    ]


    return (
        <div className='mm_cl'>
            <h1>tournament table</h1>
            <div className="ag-theme-alpine" style={{ width: 1500, height: 400 }}>
                <AgGridReact
                    rowData={rowData}
/*                     defaultColDef={defaultColDef}
 */                    columnDefs={columnDefs}>
                </AgGridReact>
            </div >
        </div>
    );
};

export default DeveloperTable;



/* const defaultColDef = {
    sortable: true, editable: true, filter: true, floatingFilter: true, flex: 1
}
const columnDefs = [
    {
        headerName: "name", field: "name",
    },
    {
        headerName: "logo", field: "id", cellRendererFramework: (params) => <div>
            {params ?
                <Link key={params}
                    to={`/teams/${params.value}`}>
                    <img src={teams[params.value - 1].team_logo}
                        className="for-tournament-logo" />
                </Link>
                : <></>}
        </div>
    },
    { headerName: "games", field: "games" },
    { headerName: "scored", field: "goals_scored" },
    { headerName: "missed", field: "goals_missed" },
    { headerName: "difference", field: "goals_difference", cellClass: (params) => (params.value > 0 ? "positive" : params.value < 0 ? "negative" : "no-games") },
    { headerName: 'points', field: 'points', cellClass: () => ("main-column") },
    { headerName: 'wins', field: 'wins' },
    { headerName: "wins_ot", field: "wins_ot" },
    { headerName: "defeats", field: "defeats" },
    { headerName: "defeats_ot", field: "defeats_ot" },
    {
        headerName: "wins %", field: "percentage_of_wins", cellRendererFramework: (params) => <div>
            {params.value}%
        </div>
    },
]

const rowSelectionType = 'single'
 */