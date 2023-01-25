import { Dehaze, LogoutOutlined,    QrCodeScanner, Telegram } from '@mui/icons-material'
import { useContext } from 'react'
import { SidebarContext } from '../../Context/SidebarContext/SidebarContext'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  const { dispatch } = useContext(SidebarContext)
  const toggleSideBar = () =>{
    dispatch({type: "OPEN"})
  }
  return (
    <div className='MainPageNav'>

      <div className='dehaze' onClick={toggleSideBar}>
        <Dehaze  className='icon_nav'/>
      </div>

        <div className='MainPageNav_lists' >
          <span >Admin</span>
        </div>

      <div className='MainPageNav_lists'>
        <b>Krypto</b>
      </div>

      <div className='MainPageNav_lists'
        onClick={()=>{
            alert("Feature dropping soon")
        }}
      >
        <QrCodeScanner className='icon_nav'/>
        <p>Qrcode Login</p>
      </div>

    <a href='https://t.me/xcrxwadda'>
      <div className='MainPageNav_lists'>
        <Telegram className='icon_nav'/>
        <p>Developer</p>
      </div>
    </a>
    
    <Link to="/login">
      <div className='MainPageNav_lists'>
        <LogoutOutlined className='icon_nav'/>
        <p>Logout</p>
      </div>
    </Link> 
    
    </div>
  )
}

export default Navbar
