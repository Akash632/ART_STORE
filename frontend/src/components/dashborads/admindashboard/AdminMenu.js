import React from 'react';
import './AdminDashboard.css';
import { NavLink } from 'react-router-dom';
function AdminMenu() {
  return (
    <div className='admin-dashboard-menu-main-container'>
      <h1>Hello, Akash</h1>
      <div className='admin-dashboard-menu-btn-container'>
        <NavLink to="/dashboard/admin/create-category">
            <button className='admin-menu-btn'>Create Category</button>
        </NavLink>
        <NavLink to="/dashboard/admin/create-product">
            <button className='admin-menu-btn'>Create Products</button>
        </NavLink>
        <NavLink to="/dashboard/admin/products">
            <button className='admin-menu-btn'>Products</button>
        </NavLink>
        <NavLink to="/dashboard/admin/orders">
            <button className='admin-menu-btn'>Orders</button>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminMenu;
