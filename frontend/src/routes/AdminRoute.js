import {useState,useEffect, useContext} from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/auth';
import Spinner from '../components/helpers/Spinner';
import { UserContext } from '../context/context';


export default function AdminRoute(){
    const [ok,setOk]=useState(false);
    // const [auth,setAuth] = useAuth();
    const {auth,setAuth}=useContext(UserContext);
    
    useEffect(()=>{
        const authCheck = async()=>{
            const res = await axios.get('http://localhost:5000/api/v1/auth/admin-auth');
            console.log(res);
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        };
        if(auth&&auth.token) authCheck()
    },[auth])

    return ok ? <Outlet/> : <Spinner path=""/>
}

