import React from 'react'
import {  ResponsiveContainer, AreaChart, Area,XAxis, Tooltip, } from 'recharts';
import "./Chart.css"
function Chart() {
  const data=[
    {
      amt: 3000
    },
    {
      amt: 2500
    }, {
      amt: 300
    }, {
      amt: 1600
    }, {
      amt: 4000
    }, {
      amt: 1000
    }, {
      amt: 700
    }, {
      amt: 9000
    }
  ]

  return (
    <ResponsiveContainer className="responsiveContainer">
        <AreaChart
          className='lineChart'
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 10,
          }}
        >
          {/* <CartesianGrid className='cartesianGrid' strokeDasharray="3 3" /> */}
          <XAxis className='x-axis' dataKey="name" />
          {/* <YAxis className='y-axis' dataKey="amt"/> */}
          <Tooltip />
          {/* <Legend /> */}
          <Area className='line' type="monotone" dataKey="amt" dot={{ stroke: '#b6bece', strokeWidth: 1 }} stroke="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
  )
}

export default Chart
