import React,{useState,useEffect} from 'react';
import { useNavigate,useLocation} from 'react-router-dom';
import './Spinner.css';

function Spinner({path="login"}) {
    const[count,setCount]=useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(count-1)
        },1000)
        count===0 && navigate(`/${path}`,{
            state:location.pathname
        })
        return ()=>clearInterval(interval);
    },[count,navigate,location,path]);
  return (
    <div style={{padding:"100px"}}>
        <h1>UnAuthorized user</h1>
        <br/>
        <h3>Redirecting to website in {count}</h3>
    </div>
  );
}

export default Spinner;