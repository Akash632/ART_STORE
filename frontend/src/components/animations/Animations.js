import React from 'react';
import { Route } from "react-router-dom";
import Shop from '../shop/Shop';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import Comission from '../comission/Comission';
import ProductDetails from '../productDetails/ProductDetails';
import CategoryWise from '../CategoryWise/CategoryWise';
import Login from '../login/Login';
import Cart from '../cart/Cart';
import AdminRoute from '../../routes/AdminRoute';
import AdminDashboard from '../dashborads/admindashboard/AdminDashboard';
import CreateCategory from '../dashborads/admindashboard/dashboardMenuPages/CreateCategory';
import CreateProducts from '../dashborads/admindashboard/dashboardMenuPages/CreateProducts';
import Users from '../dashborads/admindashboard/dashboardMenuPages/Users';
import GetProduct from '../dashborads/admindashboard/dashboardMenuPages/GetProduct';
import UpdateProduct from '../dashborads/admindashboard/dashboardMenuPages/UpdateProduct';
import PrivateRoute from '../../routes/Private';
import UserDashboard from '../user/UserDashboard';
import UserOrders from '../user/UserOrders';
import { Check } from '@mui/icons-material';
import Home from '../Home/HomeComponent/Home';


function Animations() {
  return (
    <>
          <Route exact path="/" element={<Home />} />
          <Route exact path={"/shop"} element={<Shop/>} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/comissions" element={<Comission />} />
          <Route exact path="/:value/:id" element={<ProductDetails />} />
          <Route exact path="/home/:value" element={<CategoryWise/>}/>
          {/* <Route exact path="/motion" element={<Motion/>}/> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/dashboard" element={<AdminRoute/>}>
            <Route exact path="admin" element={<AdminDashboard />} />
            <Route exact path="admin/create-category" element={<CreateCategory />}/>
            <Route exact path="admin/create-product" element={<CreateProducts />}/>
            <Route exact path="admin/users" element={<Users />} />
            <Route exact path="admin/products" element={<GetProduct/>}/>
            <Route exact path="admin/updateProduct/:id" element={<UpdateProduct/>}/>
          </Route>
          <Route exact path="/dashboard" element={<PrivateRoute/>}>
            <Route exact path="user" element={<UserDashboard/>}/>
            <Route exact path="user/orders" element={<UserOrders/>}/>
          </Route>
          <Route exact path="/check" element={<Check/>}/>
    </>
  );
}

export default Animations;
