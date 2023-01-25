import React, { useEffect, useState } from 'react'
import "./OrdersTable.css"
import { orderDataColumns } from '../../../DummyData/DummyData'
import { DataGrid } from '@mui/x-data-grid';
import { axiosInstance } from '../../../baseURL/BaseUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrdersTable() {
  const [ data, setData ] = useState([])

  const URL = "/Orders/getallorders"
  useEffect(() => {
    const fetchData = async( URL )=>{
      try{
        const res = await axiosInstance.get(URL)
        setData(res.data)
      }catch(err){
      }
    }
    fetchData(URL)
  }, [URL])

  const actionCollumn = [
    {
      field: 'actions',
      headerName: 'Actions',
    
      renderCell: (params)=>{
    
        const handleClick = async( id ) =>{
          try{
            await axiosInstance.delete(`/Orders/deleteorder/${id}`)
            setData(data.filter(item => item?._id !== id))
            toast.success('Deleted successfully!')
          }catch(err){
           toast.error('Network error/retry!')
          }        
  
        }
  
        return <div className='action_buttons'>
          <button className='info' onClick={()=>handleClick(params.row._id)}>Delete</button>
        </div>
    
      },
      width: 90,
    }
    ]
  return (
    <div className='Orderstable'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        />

      <h1>ALL Orders</h1>
      <div className='datagrid'>
          <DataGrid
            rows={data}
            responsive="true"
            rowHeight="50px"
            className="datagrid_items"
            getRowClassName={(params) => `${params.row.short}`}
            columns={orderDataColumns.concat(actionCollumn)}
            getRowId={(row) => row._id}
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

