import "./App.css";
import react, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/HomeComponent/Home";
import Shop from "./components/shop/Shop";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Comission from "./components/comission/Comission";
import ProductDetails from "./components/productDetails/ProductDetails";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import AdminDashboard from "./components/dashborads/admindashboard/AdminDashboard";
import CreateCategory from "./components/dashborads/admindashboard/dashboardMenuPages/CreateCategory";
import CreateProducts from "./components/dashborads/admindashboard/dashboardMenuPages/CreateProducts";
import Orders from "./components/dashborads/admindashboard/dashboardMenuPages/Orders";
import Check from "./context/Check";
import AdminRoute from "./routes/AdminRoute";
import Private from './routes/Private';
import UserOrders from "./components/user/UserOrders";
// import UserDashboard from "./components/user/UserDashboard";
import Gotobtn from "./components/Goto.js/Gotobtn";
import CategoryWise from "./components/CategoryWise/CategoryWise";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetProduct from "./components/dashborads/admindashboard/dashboardMenuPages/GetProduct";
import UpdateProduct from "./components/dashborads/admindashboard/dashboardMenuPages/UpdateProduct";
import Purchase from "./components/purchase/Purchase";
import UserUpdate from "./components/user/UserUpdate";
import User from "./components/user/User";
import ScrollToTop from "./components/scroller/ScrollToTop";

function App() {
  console.log(process.env.REACT_APP_my_name);
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={"/shop"} element={<Shop />} />
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
            <Route exact path="admin/orders" element={<Orders />} />
            <Route exact path="admin/products" element={<GetProduct/>}/>
            <Route exact path="admin/updateProduct/:id" element={<UpdateProduct/>}/>
          </Route>
          <Route exact path="/dashboard" element={<Private/>}>
            <Route exact path="user" element={<User/>}/>
            <Route exact path="user/orders" element={<UserOrders/>}/>
            <Route exact path="update/user/:id" element={<UserUpdate/>}/>
          </Route>
          <Route exact path="/payement/:id" element={<Purchase/>}/>
          <Route exact path="/check" element={<Check/>}/>
        </Routes>
        <Gotobtn/>
        <Footer />
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
