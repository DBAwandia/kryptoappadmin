import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import Chart from './Chart'
import "./MonthlyUsersChart.css"

function MonthlyUsersChart() {
  return (
    <div className='MonthlyUsersChart'>
      <div className='MonthlyUsersChart_container'>
        <h1>Monthly Sales overview</h1>
        <div className='MonthlyUsersChart_stat'>
          <ArrowUpward sx={{color: "#2da966"}} className='icon' />
          <ArrowDownward sx={{color: "#ff4f4f"}} className='icon'/>
          <p>4% more in 2021</p>
        </div>
        <div className='monthly_chart'>
          <Chart/>
        </div>
      </div>
    </div>
  )
}

export default MonthlyUsersChart
