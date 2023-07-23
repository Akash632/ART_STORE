import React,{useState,useEffect} from 'react';
import AdminMenu from '../AdminMenu';
import axios from 'axios';
import '../AdminDashboard.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function GetProduct() {
  const navigate=useNavigate();
  const [data,setData]=useState();
  const getProducts=async()=>{
    const res = await axios.get('https://palette-tales.onrender.com/api/v1/products/getproducts')
    .then((res)=>{setData(res.data.products)
    console.log(res.data)})
    .catch((err)=>console.log(err));
  }

  const deleteProducts = async (id)=>{
    const res = await axios.delete(`https://palette-tales.onrender.com/api/v1/products/deleteProduct/${id}`)
    .then((res)=>{
      if(res.data.success){
        toast(res.data.message);
        getProducts();
      }
    })
    .catch((err)=>console.log(err));
  }
  useEffect(()=>{
    getProducts();
  },[])
  return (
    <>
    <div className="admin-heading-container"></div>

    <div className="admin-dashboard-main-container">
      <div className="admin-dashboard-menu-container">
        <AdminMenu />
      </div>
      <div className="admin-dashboard-content-container">
        {data&&data.map((value)=>(
                  <div className='admin-product-card' key={value._id}>
                  <div className='admin-product-main-container'>
                  <div className='admin-product-img'>
                    <img src={value.image_src}/>
                  </div>
                  <div className='admin-product-details'>
                    <p>{value.title}</p>
                    <p>Rs. {value.original_price}</p>
                    <p>Product Status: <span>{value.product_status}</span></p>
                  </div>
                    </div>
                  <div className='admin-product-btn'>
                    <button onClick={()=>navigate(`/dashboard/admin/updateProduct/${value._id}`)}>Edit</button>
                    <button onClick={()=>deleteProducts(value._id)}>Delete</button>
                  </div>
                </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default GetProduct;
