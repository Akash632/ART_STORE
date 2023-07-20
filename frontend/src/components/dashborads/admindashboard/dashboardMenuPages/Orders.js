import React, { useEffect, useState } from "react";
import AdminMenu from "../AdminMenu";
import "../AdminDashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Orders() {
  const navigate = useNavigate();
  const [data,setData]=useState();
  const [status,setStatus]=useState(["Not Process", 'Processing',"Shipped","delivered","cancelled"]);
  const [changeStatus,setChangeStatus]=useState("");
  const getData= async ()=>{
    const res = await axios.get("http://localhost:5000/api/v1/auth/all-orders");
    setData(res.data.result);
  }

  const updateData= async (id)=>{
    const res = await axios.put(`http://localhost:5000/api/v1/auth/order-status/${id}`,{status:changeStatus});
    if(res.data.success){
      getData();
    }
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <div className="admin-heading-container"></div>

      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <AdminMenu />
        </div>
        <div className="admin-dashboard-content-container">
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
                          {value.payement.success?<select onChange={(value)=>setChangeStatus(value)} style={{marginBottom:"10px"}} name={value.status}>
                            {status.map((item)=><option value={item}>{item}</option>)}
                          </select>:<p></p>}
                          <button onClick={(value)=>updateData(value._id)}>Update</button>
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

export default Orders;
