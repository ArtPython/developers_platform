import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './../../css/developers/developerDetail.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



function ProjectsTable() {

    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/projects/')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);


    const columnDefs = [
        {
            headerName: "name", field: "name",
        },
        {
            headerName: "mark", field: "mark",
        },
        {
            headerName: "id", field: "id",
        },
        {
            headerName: "status", field: "status",
        },
    ]


    return (
        <div className='mm_cl'>
            <div className="ag-theme-alpine" style={{ width: 1500, height: 400 }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}>
                </AgGridReact>
            </div>
        </div>
    );
};

export default ProjectsTable;
