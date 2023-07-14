import React, { useEffect } from "react";
import AdminMenu from "./AdminMenu";
import "./AdminDashboard.css";
import axios from "axios";
function AdminDashboard() {
  // useEffect(()=>{
  //   axios.get('http://localhost:5000/api/v1/products/getproducts')
  //   .then((res)=>console.log(res))
  //   .catch((err)=>console.log(err))
  // },[])
  return (
    <>
      <div className="admin-heading-container"></div>
      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <AdminMenu />
        </div>
        <div className="admin-dashboard-content-container">
          <h1>Content</h1>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
