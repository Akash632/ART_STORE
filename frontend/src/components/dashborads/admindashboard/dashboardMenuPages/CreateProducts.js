import React, { useState, useEffect } from "react";
import AdminMenu from "../AdminMenu";
import "../AdminDashboard.css";
import axios from "axios";
import { toast } from "react-toastify";
function CreateProducts() {
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState();
  const [data, setData] = useState({
    title: "",
    original_price: "",
    discount: "",
    discount_price: "",
    category: "",
    product_status: "",
  });

  const [productInfo, setProductInfo] = useState([]);
  const [productImage, setProductImage] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/category/get-categories")
      .then((response) => setCategories(response.data.categories))
      .catch((err) => console.log(err));
  }, []);

  const handleData = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    transformFile(file);
  };

  const transformFile = (file) => {
    console.log(file);
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
    } else {
      setProductImage("");
    }
  };

  const handleSubmit = (e) => {
    document.getElementById("message").textContent = "In Proccess";
    e.preventDefault();

    const product_Info = productInfo.split(",");
    data.product_info = product_Info;
    data.image_src = productImage;
    console.log(data);
    axios
      .post("http://localhost:5000/api/v1/products/addProduct", data)
      .then((res) => {
        document.getElementById("message").textContent = "";
        toast(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="admin-heading-container"></div>
      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <AdminMenu />
        </div>
        <div className="admin-dashboard-create-container">
          <div className="admin-update-details-container">
          <h1 className="admin-update-heading">Create Products</h1>
            <form
              onSubmit={handleSubmit}
              className="admin-update-form-main-container"
            >
              <input
                type="text"
                placeholder="name"
                name="title"
                onChange={(e) => handleData(e)}
              />
              <br />
              <input
                type="number"
                placeholder="Enter price"
                name="original_price"
                onChange={(e) => handleData(e)}
              />
              <br />
              <input
                type="number"
                placeholder="Enter discount"
                name="discount"
                onChange={(e) => handleData(e)}
              />
              <br />
              <input
                type="number"
                placeholder="discount price"
                name="discount_price"
                onChange={(e) => handleData(e)}
              />
              <br />
              <input
                type="file"
                name="image_src"
                onChange={handleImageUpload}
              />
              <br />
              <input
                type="text"
                placeholder="product info"
                name="product_info"
                onChange={(e) => setProductInfo(e.target.value)}
              />
              <br />
              <div className="admin-dropdown-container">
              <select name="category" onChange={(e) => handleData(e)}  className="admin-dropdown">
                <option>Categories</option>
                {categories &&
                  categories.map((value) => (
                    <option value={value._id} key={value._id}>
                      {value.name}
                    </option>
                  ))}
              </select>
              <select name="product_status" onChange={(e) => handleData(e)}  className="admin-dropdown">
                <option>product status</option>
                <option value="true">In Stock</option>
                <option value="false">Out of stock</option>
              </select>
              </div>
              <div className="admin-update-btn-container">
              <input type="submit" value="Submit" className="admin-update-btn"/>
              </div>
            </form>
          </div>
          <div className="admin-create-image-container">
            <img src={productImage?productImage:"xyz.jpg"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProducts;
