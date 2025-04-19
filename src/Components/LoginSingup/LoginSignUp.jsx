import React, { useState } from 'react';
import './LofinSignUp.css';
import user_icon from '../Assets/person.jpg';
import email_icon from '../Assets/email.jpg';
import password_icon from '../Assets/password.png'; 




const LoginSignUp = () => {

  const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
    </div>
      <div className="inputs">
      {action==="Login"?<div></div>:  <div className="input">
            <img src={user_icon} alt="" width={20} height={20}/>
            <input type="text" placeholder='Name....'/>
        </div>}
      
        <div className="input">
            <img src={email_icon} alt="" width={20} height={20}/>
            <input type="email" placeholder='Email id' />
        </div>
        <div className="input">
            <img src={password_icon} alt="" width={20} height={20}/>
            <input type="password" placeholder='Password....'/>
        </div>

      </div>
      {action=="Sign Up"?<div></div>: <div className="forgot-password">Lost Password <span>Click Here</span></div>}
     
      <div className="submit-container">"
        <div className={action==="Login"?"submit gray" :"submit"} onClick={()=>setAction("Sign Up")}>SignUp</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>LogIn</div>
      </div>
    </div>
  )
}


export default LoginSignUp;
