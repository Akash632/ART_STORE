import { useState,useContext } from "react";
import UserDashboardMenu from "./UserDashboardMenu";
import { UserContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import './User.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function User() {
  // const [auth,setAuth]=useAuth();
  const {auth,setAuth} = useContext(UserContext);
  const [values,setvalues]=useState();
  const navigate=useNavigate();


  return (
    <div>
      <div className="comission-page-heading-container">
      </div>
      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <UserDashboardMenu />
        </div>
        <div className="user-dashboard-content-container">
          {auth.user?(<div className="user-profile-container">
            {/* <h1>User Info</h1> */}
            <div className="user-profile-main-card">
              <div className="user-profile-icon-card">
                <AccountCircleIcon style={{fontSize:"60px",color:"#2f3d5c"}}/>
              </div>
              <div className="user-profile-details-card">
              <p>Name : <span>{auth.user.name}</span></p>
              <p>Email : <span>{auth.user.email}</span></p>
              <p>Phone : <span>{auth.user.phone}</span></p>
              <p>Address : <span>{auth.user.address}</span></p>
              </div>
                            <div className="user-profile-btn-card">
                <button onClick={()=>navigate(`/dashboard/update/user/${auth.user._id}`)}>Edit Info</button>
              </div>
              </div>
            </div>):<h1>Loading</h1>}
        </div>
      </div>
    </div>
  );
}

export default User;
