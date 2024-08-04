import React from 'react'
import './login.css'
import eamil_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const Login = () => {


  return (
    <div className="container">
        <div className='header'>
            <div className='text'>Log in</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={eamil_icon} alt="" />
                <input type="eamil" placeholder='Email ID'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password">Lost password? <span>Click here</span></div>
        <div className='submit-container'>
            <div className="submit">Log in</div>
        </div>
    </div>
  )
}

export default Login;