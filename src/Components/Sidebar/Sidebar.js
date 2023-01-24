import React, { useContext } from 'react'
import "./Sidebar.css"
import { BreakfastDining,  CheckCircleOutline, Close, LocalMall, PeopleAlt, Settings } from "@mui/icons-material"
import { SidebarContext } from '../../Context/SidebarContext/SidebarContext'
import { NavLink } from "react-router-dom"
function Sidebar() {
  const { dispatch } = useContext(SidebarContext)

  const handleClose = () =>{
    dispatch({type: "CLOSE"})
  }
  return (
    <div className='sidebar'>
      <div className='sidebar_container'>

      <NavLink to="/" onClick={handleClose}>
        <div className='sidebar_components_close'>
          <p>Admin</p>
          <Close className='icons' onClick={()=>{
            dispatch({type: "CLOSE"})
          }} />
        </div>
      </NavLink>

      <NavLink to="/"
        onClick={handleClose} 
       >
        <div className='sidebar_components_hover'>
          <div className='sidebar_components'>
            <BreakfastDining className='icons' />
            <p>Dashboard</p>
          </div>
        </div>
      </NavLink>

      <NavLink to="/users"
        onClick={handleClose} 
       >
      <div className='sidebar_components_hover'>     
          <div className='sidebar_components'>
            <PeopleAlt className='icons' />
            <p>Users</p>
          </div>
      </div>
      </NavLink>

      <NavLink to="/orders" 
        onClick={handleClose}
       >
        <div className='sidebar_components_hover'>
          <div className='sidebar_components'>
          <LocalMall className='icons'/>
          <p>Orders</p>
          </div>
        </div>
      </NavLink>

      <div className='sidebar_components_hover'>
        <div className='sidebar_components'>
          <CheckCircleOutline className='icons'/>
          <p>Sales</p>
        </div>
      </div>

      <div className='sidebar_components_hover'>
        <div className='sidebar_components'>
          <Settings className='icons'/>
          <p>Settings</p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Sidebar
