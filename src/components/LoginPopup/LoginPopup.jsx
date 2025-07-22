import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
1
const [currState,setCurrState]=useState("Sign In")

  return (
    <div className='login-popup'>
       <form action="" className="login-popup-container">
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=' '/>
        </div>
        <div className="login-popup-inputs">
            {
                currState==="Sign In"?<></>:<input type="text" placeholder='Your name' name="" id="" required/>
            }
            
            <input type="email" placeholder='Your Email' name="" id="" required/>
            <input type="password" placeholder=' Password' name="" id="" required/>

        </div>
        <button>{currState==="Sign Up"?"create account" : "Login"}</button>
        <div className='login-popup-condition'>
            <input type='checkbox' required />
            <p>By continuing , i agree to the terms of use & privacy policy</p>
        </div>
        {
            currState==="Sign In"?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Sign In")} >Login here</span></p>
        }
        
        
        </form> 
        </div>
  )
}

export default LoginPopup