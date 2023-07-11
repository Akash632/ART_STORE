import React,{createContext,useState,useEffect} from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [navStatus,setNavStatus] = useState(false);
    const [cart,setCart] = useState([]);
    const[auth,setAuth]=useState({
        user:null,
        token:""
    });
    axios.defaults.headers.common['Authorization']=auth?.token;
    
    useEffect(()=>{
        const data = localStorage.getItem('auth')
        if(data){
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            });
            setNavStatus(false);
        }
    //eslint-disable-next-line    
    },[])
return(
    <UserContext.Provider value={{navStatus,setNavStatus,auth,setAuth,cart,setCart}}>
        {children}
    </UserContext.Provider>
)
}
