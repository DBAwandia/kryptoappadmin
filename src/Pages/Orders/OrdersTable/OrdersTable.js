import React from 'react'
import "./OrdersTable.css"
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

function OrdersTable() {
  return (
    <div className='Orderstable'>
      <h1>ALL Orders</h1>
      <div className='datagrid'>
          <DataGrid
            rows={rows}
            responsive="true"
            rowHeight="50px"
            className="datagrid_items"
            getRowClassName={(params) => `${params.row.status}`}
            getRowId={rows.id}
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

export default OrdersTable

