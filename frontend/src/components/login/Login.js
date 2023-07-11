import React, { useState,useEffect,useContext } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import User from "../user/User";
import { UserContext } from "../../context/context";
import { useAuth } from "../../context/auth";

function Login() {
  const navigate = useNavigate();
  const [user,setUser] = useState(false);
  const [loginData,setLoginData]= useState({email:'',password:''});
  const [signUp, setSignUp] = useState({name:'',email:'',password:'',phone:'',address:''});
  // const {author,setAuthor} = useContext(UserContext);

  // const[auth,setAuth]=useAuth();
  const {auth,setAuth}=useContext(UserContext);

  const handleSignUp = async ()=>{
    const res = await axios.post('http://localhost:5000/api/v1/auth/register',{
      name:signUp.name,
      email:signUp.email,
      password:signUp.password,
      phone:signUp.phone,
      address:signUp.address
    })
    if(res.data.success){
      localStorage.setItem('auth',JSON.stringify(res.data));
      console.log(localStorage.getItem('auth'));
      navigate('/');
    }
    else{
      document.getElementById("register-warning-message").innerHTML=res.data.message;
    }
  }


  const handleLogin = async()=>{
    const res = await axios.post('http://localhost:5000/api/v1/auth/login',{
      email:loginData.email,
      password:loginData.password
    })
    console.log(res);
    if(res.data.success){
      localStorage.setItem('auth',JSON.stringify(res.data));
      navigate('/');
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token
      })
    }
    else{
      document.getElementById("login-warning-message").innerHTML=res.data.message;
    }
  }

  const handleLoginInputs = (e)=>{
    setLoginData((prevState)=>{
      return {
        ...prevState,[e.target.name]:e.target.value,
      }
    })
  }

  const handleSigUpInputs = (e)=>{
    setSignUp((prevState)=>{
      return{
        ...prevState,[e.target.name]:e.target.value,
      }
    })
  }


  // console.log(`login status ${dataStatus}`);
  // useEffect(()=>{
  //   window.scroll(0,0);
  // },[user])
  
  // useEffect(()=>{
  //   setAuth(localStorage.getItem("auth"));
  // },[auth])

  
  return (
    <>
      <div className="login-header-container"></div>
      {
       auth.user ? <User/> :   
          user ? (
            <div className="login-main-container">
            <div className="login-card-container">
              <div className="login-heading-container">
                <h1>Sign Up</h1>
                <p id="register-warning-message" style={{color:"red"}}></p>
              </div>
              <div className="login-input-container">
                <input type="text" placeholder="Name" name="name" onChange={(e)=>handleSigUpInputs(e)}/>
                <input type="text" placeholder="Email" name="email" onChange={(e)=>handleSigUpInputs(e)}/>
                <input type="password" placeholder="Password"  name="password" onChange={(e)=>handleSigUpInputs(e)}/>
                <input type="text" placeholder="Phone" name="phone" onChange={(e)=>handleSigUpInputs(e)}/>
                <input type="text" placeholder="Address"  name="address" onChange={(e)=>handleSigUpInputs(e)}/>
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
                <input type="text" placeholder="Email" name="email" onChange={(e)=>handleLoginInputs(e)}/>
                <input type="password" placeholder="Password" name="password" onChange={(e)=>handleLoginInputs(e)}/>
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
