import React,  {useEffect , useState} from 'react'
import "./Userstable.css"
import { userDataColumns } from '../../../DummyData/DummyData'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {axiosInstance} from "../../../baseURL/BaseUrl"
import { useNavigate } from 'react-router-dom';
const columns = userDataColumns



function Userstable() {
  const [ data, setData ] = useState([])
  const navigate = useNavigate()
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

  const actionCollumn = [
    {
      field: 'actions',
      headerName: 'Actions',
    
      renderCell: (params)=>{
        const handleClick = (username , status) =>{
          navigate("/modifyuser" , { state:{ username , status}})
        }
        return <div className='action_buttons'>
          <button className='info'
          onClick={()=>handleClick(params.row.username , params.row.accountType)}
          >View</button>
        </div>
    
      },
      width: 90,
    }
    ]
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
