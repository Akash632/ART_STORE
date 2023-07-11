import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/context';
import './User.css';
function UserDashboardMenu() {
    const {auth,setAuth} = useContext(UserContext)
    const handleLogOut = () =>{
        localStorage.removeItem('auth');
        setAuth({
          user:null,
          token:""
        });
    }
  return (
    <>
        <div className='admin-dashboard-menu-main-container'>
    <h1>Hello, {auth.user.name}</h1>
    <div className='admin-dashboard-menu-btn-container'>
      <NavLink to="/dashboard/user/orders">
          <button className='admin-menu-btn'>Your Orders</button>
      </NavLink>
      <NavLink>
          <button className='admin-menu-btn' onClick={handleLogOut}>LogOut</button>
      </NavLink>
    </div>
  </div>
    </>
  );
}

export default UserDashboardMenu;
