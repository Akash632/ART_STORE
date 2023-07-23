import React,{useState,useEffect} from "react";
import "./Category.css";
import  axios from 'axios';
import { useNavigate } from "react-router-dom";

function Category() {
  const [categories, setCategories]=useState("");
  const navigate = useNavigate();

    useEffect(()=>{
      axios.get('https://palette-tales.onrender.com/api/v1/category/get-categories')
      .then((res)=>setCategories(res.data.categories))
      .catch((err)=>console.log(err));
    },[])

  return (
    <div className="category-card-bg">
      <div className="shop-heading">
        <h1>SHOP</h1>
      </div>
      <div className="category-card-images-container">
      {categories&&categories.slice(1,4).map((value)=>(
        <div key={value._id} className="category-card-container" onClick={()=>navigate(`/home/${value.slug}`)}>
            <img src={value.image_src}/>
            <button className="category-card-button">{value.name}</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Category;
