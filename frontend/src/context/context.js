import React,{createContext,useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [navStatus,setNavStatus] = useState(false);
    const[auth,setAuth]=useState();
return(
    <UserContext.Provider value={{navStatus,setNavStatus,auth,setAuth}}>
        {children}
    </UserContext.Provider>
)
}
