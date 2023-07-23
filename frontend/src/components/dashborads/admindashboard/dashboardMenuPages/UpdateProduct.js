import React, { useState, useEffect, CSSProperties  } from "react";
import AdminMenu from "../AdminMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../AdminDashboard.css";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";


function UpdateProduct() {
  const [values, setValues] = useState();
  const params = useParams();
  const [categories, setCategories] = useState();
  const [productInfo, setProductInfo] = useState();
  const [img, setImg] = useState(false);
  const[productImage,setProductImage]=useState();
  const [loading,setLoading]=useState(false);

  const getProducts = async () => {
    const res = await axios
      .get(`https://palette-tales.onrender.com/api/v1/products/getproducts/${params.id}`)
      .then((res) => {
        if (res.data.success) {
          setValues(res.data.details);
        }
      })
      .catch((err) => console.log(err));
  };

  const getCategories = async () => {
    axios
      .get("https://palette-tales.onrender.com/api/v1/category/get-categories")
      .then((response) => setCategories(response.data.categories))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFiles=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();

    if(file){
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
        setProductImage(reader.result);
        setImg(false);
      }
    }else{
      setProductImage(
        ""
      )
    }
  }

  const handleUpdate = async (e)=>{
    e.preventDefault();
    setLoading(true);
    if(productImage){
      values.image_src=productImage;
    }
    const res = await axios
    .put(`https://palette-tales.onrender.com/api/v1/products/updateProduct/${params.id}`,values)
    .then((res)=>{
      console.log(res);
      if(res.data.success){
        setLoading(false)
        toast(res.data.message);
      }
    })
    .catch((err)=>console.log(err))
  }
  return (
    <>
      <div className="admin-heading-container"></div>
      {values && (
        <div className="admin-dashboard-main-container">
          <div className="admin-dashboard-menu-container">
            <AdminMenu />
          </div>
          <div className="admin-dashboard-update-container">
            <div className="admin-update-details-container">
              <h1 className="admin-update-heading">Update Products</h1>
              <form onSubmit={handleUpdate} className="admin-update-form-main-container">
                <input
                  type="text"
                  placeholder="name"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="number"
                  placeholder="Enter price"
                  name="original_price"
                  value={values.original_price}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="number"
                  placeholder="Enter discount"
                  name="discount"
                  value={values.discount}
                  onChange={handleChange}
                />
                <br />
                <input
                  type="number"
                  placeholder="discount price"
                  name="discount_price"
                  value={values.discount_price}
                  onChange={handleChange}
                />
                <br />
                {/* <input type="file" name="image_src" onChange={handleImageUpload}/> */}
                {/* <br /> */}
                <input
                  type="text"
                  placeholder="product info"
                  name="product_info"
                  value={values.product_info}
                  onChange={handleChange}
                />
                <br />
                <div className="admin-dropdown-container">
                <select name="category" onChange={handleChange} className="admin-dropdown">
                  <option>Categories</option>
                  {categories &&
                    categories.map((value) => (
                      <option value={value._id} key={value._id}>
                        {value.name}
                      </option>
                    ))}
                </select>
                <select name="product_status" onChange={handleChange} className="admin-dropdown">
                  <option>product status</option>
                  <option value="true">In Stock</option>
                  <option value="false">Out of stock</option>
                </select>
                </div>
                <div className="admin-update-btn-container">
                <input type="submit" value="Submit" className="admin-update-btn"/>
                </div>
                <br/>
                <div>
                <ClipLoader color="#1b52a6" loading={loading}/>
                </div>
              </form>
            </div>
            <div className="admin-update-img-container">
              {img ? (
                <input type="file" onChange={handleFiles}/>
              ) : (
                  <img src={productImage?productImage:values.image_src} />
              )}
              <button onClick={()=>setImg(true)}>X</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateProduct;
