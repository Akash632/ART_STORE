import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/context";
import "./User.css";
function UserDashboardMenu() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(UserContext);
  const handleLogOut = () => {
    navigate("/login");
    localStorage.removeItem("auth");
    console.log("user logged out");
    setAuth({
      user: null,
      token: "",
    });
  };
  return (
    <>
      <div className="admin-dashboard-menu-main-container">
        <h1>Hello, {auth.user && auth.user.name}</h1>
        <div className="admin-dashboard-menu-btn-container">
          <NavLink to="/dashboard/user">
            <button className="admin-menu-btn">Profile</button>
          </NavLink>
          <NavLink to="/dashboard/user/orders">
            <button className="admin-menu-btn">Your Orders</button>
          </NavLink>
          <NavLink>
            <button className="admin-menu-btn" onClick={handleLogOut}>
              LogOut
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default UserDashboardMenu;
