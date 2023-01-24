import React, { useContext, useState } from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { SidebarContext } from '../../Context/SidebarContext/SidebarContext'
import "./Orders.css"
import OrdersTable from './OrdersTable/OrdersTable'

function Orders() {
  const { openSidebar, dispatch } = useContext(SidebarContext)
  return (
    <div className='Orders'>

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

      <div className='Orders_navbar'>
        <Navbar />
      </div>

    <div className='Orders_container'>
      {/* To display on desktop */}
        <div className='side_bar'>
              <Sidebar />
        </div>

        <div className='Orders_table'>
            <OrdersTable />
        </div>
    </div>

    </div>
  
  )
}

export default Orders
