import React, { useContext, useState } from 'react'
import MainContent from '../../Components/MainContent/MainContent'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Home.css"
import 'animate.css';
import MonthlyUsersChart from '../../Components/MonthlyUsersChart/MonthlyUsersChart'
import { SidebarContext } from '../../Context/SidebarContext/SidebarContext'

function Home() {
  const { openSidebar, dispatch } = useContext(SidebarContext)

  return (
    <div className='Home'>
      <div className='Home_navbar'>
        <Navbar />
      </div>
      
      <div className='Sidebar_Maincontent'>

      {openSidebar &&  <div className='toggle_component '>
              {/* To display on moblie */}
            <div className='sidebars_shadow'
              onClick={()=>{
                dispatch({type: "CLOSE"})
              }}
            >        
            </div>

              <div className='side_bars animate__animated animate__fadeInLeft '>
                    <Sidebar />
              </div>
         </div>}

          {/* To display on desktop */}
            <div className='side_bar'>
              <Sidebar />
            </div>

              <div className='main_content'>
                <MainContent />
              <div className='Monthly_chart_content'>
                {/* <MonthlyUsersChart /> */}
              </div>
              
              </div>

           
      </div>
    </div>
  )
}

export default Home
