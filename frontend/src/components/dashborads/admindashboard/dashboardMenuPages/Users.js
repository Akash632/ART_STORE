import React from "react";
import AdminMenu from "../AdminMenu";
import "../AdminDashboard.css";
function Users() {
  return (
    <>
      <div className="admin-heading-container"></div>

      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <AdminMenu />
        </div>
        <div className="admin-dashboard-content-container">
          <h1>users</h1>
        </div>
      </div>
    </>
  );
}

export default Users;
