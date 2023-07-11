import { useContext } from "react";
import UserDashboardMenu from "./UserDashboardMenu";
import { UserContext } from "../../context/context";
function User() {
  // const [auth,setAuth]=useAuth();
  const {auth,setAuth} = useContext(UserContext);
  return (
    <div>
      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <UserDashboardMenu />
        </div>
        <div className="admin-dashboard-content-container">
          <h1>hello, {auth.user.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default User;
