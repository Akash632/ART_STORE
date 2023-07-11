import axios from "axios";
import { useState,useEffect ,useContext ,createContext, children} from "react";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [navStatus,setNavStatus] = useState();

    const [auth,setAuth]=useState({
        user:null,
        token:""
    })

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

    return (
        <AuthContext.Provider value={[navStatus,setNavStatus,auth,setAuth]}>
            {children}
        </AuthContext.Provider>
        )
}

//custom hook

const useAuth = ()=>useContext(AuthContext);

export {useAuth,AuthProvider};

