import React,  {useEffect , useState} from 'react'
import "./Userstable.css"
import { userDataColumns } from '../../../DummyData/DummyData'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {axiosInstance} from "../../../baseURL/BaseUrl"
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
  const [ data, setData ] = useState([])

  const URL = "/Users/getusers"
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
  return (
    <div className='Userstable'>
      <h1>ALL USERS</h1>
      <div className='datagrid'>
          <DataGrid
            rows={data}
            rowHeight="50px"
            responsive="true"
            className="datagrid_items"
            getRowClassName={(params) => `${params.row.accountType}`}
            getRowId={(row) => row._id}
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
