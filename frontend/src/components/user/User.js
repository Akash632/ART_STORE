import React,{useContext} from 'react';
import { UserContext } from '../../context/context';
function User() {
    const {auth,setAuth} = useContext(UserContext);

    const handleLogOut = () =>{
        localStorage.removeItem('auth');
        setAuth(null);
    }
  return (
    <div>
      <h1>Hello user {auth}</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}

export default User;
