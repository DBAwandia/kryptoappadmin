import React, { useContext } from 'react'
import "./ModifyUser.css"
import Navbar from "../../Components/Navbar/Navbar"
import { SidebarContext } from '../../Context/SidebarContext/SidebarContext'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosInstance } from '../../baseURL/BaseUrl'

function ModifyUser() {
    let image = "https://img1.cgtrader.com/items/3489008/3fea59b25b/large/3d-nft-stylized-character-base-template-in-blender-3d-model-obj-fbx-blend.jpg"
    const { openSidebar, dispatch } = useContext(SidebarContext)
    const location =useLocation()
    const navigate = useNavigate()
    const usernames= location.state.username
    const statuses = location.state.status

    //ban
    const handleBan = async() =>{
        try{
            await axiosInstance.put("/Users/banuser" , {username: usernames})
            toast.success("Temporary banned")
            setTimeout(()=>{
                navigate("/users")
            },3000)
        }catch(err){
            toast.error("Network error/retry")
        }
    }

     //unban
     const handleUnBan = async() =>{
        try{
            await axiosInstance.put("/Users/unbanuser" , {username: usernames})
            toast.success("Successfuly unBanned")
            setTimeout(()=>{
                navigate("/users")
            },3000)
            
        }catch(err){
            toast.error("Network error/retry")
        }
     }

      //unban
      const handleDelete = async() =>{
        try{
            await axiosInstance.delete("/Users/deleteuser" , {username: usernames})
            toast.success("Successfuly unBanned")
            setTimeout(()=>{
                navigate("/users")
            },3000)
        }catch(err){
            toast.error("Network error/retry")
        }
      }

  return (
    <div className='ModifyUser'>
         <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        />
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
        <div className='ModifyUser_container'>
            <Navbar />
        <div className='action_container'>
            <h1>Modify user</h1>
            <div className='image_container'>
                <img className='image' src={image} alt="" />
                <p style={{fontWeight: "bolder"}}>{usernames}</p>
                <p>{statuses}</p>
            <div className='image_actions'>
                <button className='ban' onClick={handleBan}>Ban</button>
                <button className='unBan' onClick={handleUnBan}>UnBan</button>
                <button className='delete' onClick={handleDelete}>Delete</button>
            </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default ModifyUser
