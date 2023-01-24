import React, { useContext, useState } from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { SidebarContext } from '../../Context/SidebarContext/SidebarContext'
import "./Users.css"
import Userstable from './UsersTable/Userstable'

function Users() {
  const { openSidebar, dispatch } = useContext(SidebarContext)
  return (
    <div className='Users'>

       {openSidebar &&  <div className='toggle_component '>
              {/* To display on moblie */}
            <div className='sidebars_shadow'
              onClick={()=>{
                dispatch({type:"CLOSE"})
              }}
            >        
            </div>
              <div className='side_bars animate__animated animate__fadeInLeft '>
                    <Sidebar />
              </div>
         </div>}

      <div className='Users_navbar'>
        <Navbar />
      </div>

    <div className='Users_container'>
      {/* To display on desktop */}
        <div className='side_bar'>
              <Sidebar />
        </div>

        <div className='Users_table'>
            <Userstable />
        </div>
    </div>

    </div>
  
  )
}

export default Users
