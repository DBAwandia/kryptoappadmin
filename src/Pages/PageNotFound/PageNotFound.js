import { ArrowBackIos } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.css"

function PageNotFound() {
  return (
    <div className='PageNotFound'>
      <div className="PageNotFound_container">
      
      <Link to="/login">
        <div className='pagenotfound_icon'>
            <ArrowBackIos className='icons'/>
            <p>Back</p>
        </div>
       </Link>

       <div className='pagenotfound_body'>
        <p>404</p>
        <span>Page requesting not found</span>
       </div>
      </div>
    </div>
  )
}

export default PageNotFound
