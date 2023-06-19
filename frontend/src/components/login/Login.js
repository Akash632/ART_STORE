import React, { useState,useEffect,useContext } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import User from "../user/User";
import { UserContext } from "../../context/context";

function Login() {
  const navigate = useNavigate();
  const [user,setUser] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  // const [dataStatus,setDataStatus] = useState();
  const {auth,setAuth} = useContext(UserContext);

  const handleSignUp = async ()=>{
    const res = await axios.post('http://localhost:5000/register',{
      name,email,password,phone,address
    })
    // setDataStatus(res.data.success);
    if(res.data.success){
      localStorage.setItem('auth',JSON.stringify(res.data.user));
      console.log(localStorage.getItem('auth'));
      // setAuth(localStorage.getItem('auth'));
      navigate('/');
    }
    else{
      document.getElementById("register-warning-message").innerHTML=res.data.message;
    }
  }

  const handleLogin = async()=>{
    const res = await axios.post('http://localhost:5000/login',{
      email,password
    })
    if(res.data.success){
      localStorage.setItem('auth',JSON.stringify(res.data.user));
      navigate('/');
    }
    else{
      document.getElementById("login-warning-message").innerHTML=res.data.message;
    }
  }

  // console.log(`login status ${dataStatus}`);
  // useEffect(()=>{
  //   window.scroll(0,0);
  // },[user])
  
  useEffect(()=>{
    setAuth(localStorage.getItem("auth"));
  },[auth])
  return (
    <>
      <div className="login-header-container"></div>
      {
       auth ? <User/> :   
          user ? (
            <div className="login-main-container">
            <div className="login-card-container">
              <div className="login-heading-container">
                <h1>Sign Up</h1>
                <p id="register-warning-message" style={{color:"red"}}></p>
              </div>
              <div className="login-input-container">
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
              </div>
              <div className="login-button-container">
                <div className="login-text-container">
                  <p>
                    Already have an account? / <span onClick={()=>setUser(false)}>Login</span>
                  </p>
                </div>
                <button type="button" className="login-button" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          ): 
          (
            <div className="login-main-container">
            <div className="login-card-container">
              <div className="login-heading-container">
                <h1>Login</h1>
                <p id="login-warning-message" style={{color:"red"}}></p>
              </div>
              <div className="login-input-container">
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="login-button-container">
                <div className="login-text-container">
                  <p>
                    Forgot your password? / <span onClick={()=>setUser(true)}>Create an account</span>
                  </p>
                </div>
                <button type="button" className="login-button" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
          </div> 
          )
      }
    </>
  );
}

export default Login;
