import React from "react";
import UserDashboardMenu from "./UserDashboardMenu";
import './User.css';
function UserOrders() {
  return (
    <>
    <div className="admin-heading-container"></div>
      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <UserDashboardMenu />
        </div>
        <div className="admin-dashboard-content-container">
          <h1>Your orders</h1>
        </div>
      </div>
    </>
  );
}

export default UserOrders;
