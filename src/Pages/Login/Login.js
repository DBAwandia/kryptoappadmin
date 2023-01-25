import { Close } from '@mui/icons-material'
import React, { useContext, useEffect, useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosInstance } from '../../baseURL/BaseUrl';
import { LoginContext } from '../../Context/LoginContext/LoginContext';

function Login() {
  const navigate = useNavigate()
  const [ emailAndUsername, setEmailAndUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [enable, setEnable ] = useState(false)
  useEffect(()=>{
    if(password.length === 0 ){
      setEnable(true)
    }else{
      setEnable(false)
    }
  },[password , enable])
  const {  loading  , dispatch} = useContext(LoginContext)
  const handleLogin = async() =>{
    try{
      dispatch({type: "LOGIN_START"})
      const res = await axiosInstance.post("/Users/login" , { email: emailAndUsername, username: emailAndUsername, password: password})
      if(res.data.isAdmin){
        dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
        toast.success("Login success")
        setTimeout(()=>{
        navigate("/")
        },1500)
      }else{
        toast.error("Not an admin, contact developer")
        dispatch({type :"LOGIN_FAIL" })
      }

    }catch(err){
      dispatch({type :"LOGIN_FAIL" })
      toast.error(err.response.data.msg)
    }
  }


  return (
    <div className='Login'>
       <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <div className='login_container'>
        <div className='login_header'>
            <div className='login_logo'>
                <img className='logo_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8OX4mN_kRTm-CvXz0uIM0QeXL7CD8OGmcQ&usqp=CAU' alt='' />
                <h1 >Krypto</h1>
            </div>

            <a href="https://kryptoscoin.netlify.app/notuser">
              <div className='close'>
                  <Close className='closex'/>
              </div>
            </a>

        </div>

        <div className='login_description'>
            <p>Login as Admin </p>
        </div>
        <div className='login_input'>
            <input type="email" placeholder="Email / username" onChange={(e) => setEmailAndUsername(e.target.value)} />
        </div>
        <div className='login_input'>
            <input type="password" placeholder="Password" className='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>


        <div className='login_button'>
                <button className='cancelss'onClick={()=>{
                    navigate("/notuser")
                }}>
            <a href="https://kryptoscoin.netlify.app/notuser">
                    Cancel
            </a>
                </button>
            <button className='logins' disabled={enable} onClick={()=>handleLogin()}>{loading ? "Loading..." : "Login"}</button>
        </div>

        {/* <div className='forget_password'>
            <p>Forgot password?</p>
        </div> */}

      </div>
    </div>
  )
}

export default Login
