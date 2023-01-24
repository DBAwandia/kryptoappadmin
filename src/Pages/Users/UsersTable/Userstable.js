import React from 'react'
import "./Userstable.css"
import { userDataColumns,userDataRows } from '../../../DummyData/DummyData'
import { DataGrid } from '@mui/x-data-grid';
const rows = userDataRows
const columns = userDataColumns

const actionCollumn = [
{
  field: 'actions',
  headerName: 'Actions',

  renderCell: (params)=>{

    return <div className='action_buttons'>
      <button className='info'>View</button>
    </div>

  },
  width: 90,
}
]

function Userstable() {
  return (
    <div className='Userstable'>
      <h1>ALL USERS</h1>
      <div className='datagrid'>
          <DataGrid
            rows={rows}
            rowHeight="50px"
            responsive="true"
            className="datagrid_items"
            getRowClassName={(params) => `${params.row.status}`}
            getRowId={(row)=>row.id}
            columns={columns.concat(actionCollumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            // disableSelectionOnClick
          />
      </div>
    </div>
  )
}

export default Userstable
