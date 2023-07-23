import React, { useState, useEffect, useContext } from "react";
import UserDashboardMenu from "./UserDashboardMenu";
import "./User.css";
import axios from "axios";
import { UserContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
function UserOrders() {
  const [data, setData] = useState([]);
  const { auth, useAuth } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  let productDetails = [];
  const cart = JSON.parse(localStorage.getItem("cart"));
  const navigate=useNavigate();

  const getData = async () => {
    const res = await axios.get(
      `https://palette-tales.onrender.com/api/v1/auth/orders/${auth.user._id}`
    );
    setData(res.data.result);
  };
  useEffect(() => {
    auth.user && getData();
  }, [cart]);

  return (
    <>
      <div className="admin-heading-container"></div>
      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <UserDashboardMenu />
        </div>
        <div className="admin-dashboard-content-container">
          {data.length>0&&<h1>Your Orders</h1>}
          {data && data.length > 0 ? (
            data.map((value) => (
              <div className="user-order-page-main-container">
                <div className="user-order-products-container">
                  {value.products.map((item) => (
                    <div className="user-order-products-cards-container">
                      <div className="user-order-products-details-card">
                        <div className="user-order-products-img-container">
                          <img src={item.image_src} />
                        </div>
                        <div className="user-order-products-text-container">
                          <h3>{item.title}</h3>
                          <p>Rs. {item.original_price}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="user-order-products-price-container">
                        <div>
                          <p style={{marginBottom:"10px"}}><span>Order status : </span>{value.payement.success.toString()}</p>
                          {value.payement.success?<p><span>Shipping : </span>{value.status}</p>:<p></p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-user-order-main-container">
              <div className="no-user-order-container">
              <h1>No orders</h1>
              <button onClick={()=>navigate('/shop')} className="no-order-shop-now-btn">Shop Now</button>
                </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserOrders;
