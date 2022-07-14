import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './../../css/developers/developerDetail.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Loader from '../general/additional/loader';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './forTables.css';


function LanguagesTable() {

    const [rowData, setRowData] = useState([]);
    const all_languages = useSelector(state => state.LanguagesReducer.languages)
    const all_frameworks = useSelector(state => state.FrameworksReducer.frameworks)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/languages/')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);

    const defaultColDef = {
        sortable: true, editable: true, filter: true, floatingFilter: true, flex: 1
    }

    const rowSelectionType = 'single'

    const columnDefs = [
        {
            headerName: "name", field: "name",
        },
        {
            headerName: "purpose", field: "purpose",
        },
        {
            headerName: "photo", field: "id", cellRendererFramework: (params) => <div>
                {params ?
                    <Link key={params.value}
                        to={`/languages/${params.value}`}>
                        <img src={all_languages[params.value - 1].photo}
                            className='for-img'/>
                    </Link>
                    : <></>}
            </div>
        },
        {
            headerName: "frameworks", field: "frameworks", cellRendererFramework: (params) =>
                <div>
                    {params ?
                        <>
                            {params.value.map(param =>
                                <Link key={param}
                                    to={`/frameworks/${param}`}
                                    className='for-all-links'>
                                    <img src={all_frameworks[param - 1].photo}
                                        className='for-img' />
                                </Link>
                            )}
                        </>
                        : <></>}
                </div>
        },
        {
            headerName: "frameworks amount", field: "frameworks", cellRendererFramework: (params) =>
                <div>
                    {params ?
                        <p>{params.value.length}</p>
                        : <>no frameworks</>}
                </div>
        },
        {
            headerName: "developers amount", field: "developers", cellRendererFramework: (params) =>
                <div>
                    {params ?
                        <p>{params.value.length}</p>
                        : <>no developers</>}
                </div>
        },
    ]


    return (
        <>
            {all_languages.length > 0 && all_frameworks.length > 0 ?
                <div className='mm_cl'>
                    <div className="ag-theme-alpine" style={{ width: 1500, height: 400 }}>
                        <AgGridReact
                             rowData={rowData}
                             columnDefs={columnDefs}
                             defaultColDef={defaultColDef}
                             enableBrowserTooltips={true}
                             rowSelection={rowSelectionType}
                            >
                        </AgGridReact>
                    </div>
                </div>
                :
                <Loader />
            }
        </>
    );
};

export default LanguagesTable;
