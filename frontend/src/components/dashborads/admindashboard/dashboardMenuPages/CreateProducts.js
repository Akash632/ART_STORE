import React,{useState,useEffect} from "react";
import AdminMenu from "../AdminMenu";
import "../AdminDashboard.css";
import axios from 'axios';
function CreateProducts() {
  // const instance = axios.create();
  // delete instance.defaults.headers.common['Authorization'];
  const auth = JSON.parse(localStorage.getItem('auth')).token;
  const [categories,setCategories] = useState([]);
  const [data,setData] = useState({
    title:"",
    original_price:"",
    discount:"",
    discount_price:"",
    category:"",
    product_status:""
  })
  const [more,setMore]=useState({
    image_url:"",
    product_info:[],
    related_images:[]
  })
  const [image,setImage]=useState("");
  let main_image;
  const [rel,setRel] = useState();
  const relImages=[];
  const [productInfo,setProductInfo]= useState([]);
  const [productImage,setProductImage] = useState();
  console.log(productImage);

  useEffect(()=>{
          axios.get('http://localhost:5000/api/v1/category/get-categories')
      .then((response)=>setCategories(response.data.categories))
      .catch((err)=>console.log(err));
  },[])

  const handleData = (e) =>{
    setData((prevState)=>{
      return{...prevState,[e.target.name]:e.target.value,}
    })
  }
  const handleSubmit= async (e)=>{
    e.preventDefault()
    // if(image){
    //   const data = new FormData();
    //   data.append("file", image);
    //   data.append("upload_preset", "tvelbre1");
    //   console.log(data);
    //   const res = await instance.post("https://api.cloudinary.com/v1_1/art-store632/image/upload", data)
    //   main_image=res.data.secure_url; 
    //   console.log("main_image",main_image);
    // }
    // if(rel){
    //   var result = Object.entries(rel);
    //   result.map(async (value) => {
    //     const data = new FormData();
    //     data.append("file", value[1]);
    //     data.append("upload_preset", "tvelbre1");
    //     console.log(data);
    //     const res = await instance.post("https://api.cloudinary.com/v1_1/art-store632/image/upload", data)
    //     relImages.push(res.data.secure_url); 
    //     console.log("relImages",relImages);
    //   })
    //   console.log(relImages.length);
    // }
  //  const info = productInfo.split(",");
  //  console.log(relImages.length,main_image);
  //  if(true){
  //   // data.image_src = main_image;
  //   data.product_info = info;
  //   axios.post('http://localhost:5000/api/v1/products/addProduct',{
  //     data
  //   }).then((res)=>console.log(res)).catch((err)=>console.log(err));
  //  }
  //  console.log(data);
  // const info = productInfo.splice(",");
  // const res = await axios.post('http://localhost:5000/api/v1/products/addProduct',{data})
  // console.log(res);
  transformFile(image);

  }

  const transformFile =(file) =>{
    console.log(file);
    const reader = new FileReader();

    if(file){
      reader.readAsDataURL(file);
      reader.onloaded=()=>{
        setProductImage(reader.result)
      }
      console.log(productImage);
    }else{
      setProductImage(
        ""
      )
    }
  }
  return (
    <>
      <div className="admin-heading-container">
        {JSON.stringify(data)}
      </div>
      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <AdminMenu />
        </div>
        <div className="admin-dashboard-content-container">
          <h1>create Products</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="name" name="title" onChange={(e)=>handleData(e)}/>
              <br />
              <input type="number" placeholder="Enter price" name="original_price" onChange={(e)=>handleData(e)}/>
              <br />
              <input type="number" placeholder="Enter discount" name="discount" onChange={(e)=>handleData(e)}/>
              <br />
              <input type="number" placeholder="discount price" name="discount_price" onChange={(e)=>handleData(e)}/>
              <br />
              <input type="file" name="image_src" onChange={(e)=>setImage(e.target.files[0])}/>
              <br />
              <input type="text" placeholder="product info" name="product_info" onChange={(e)=>setProductInfo(e.target.value)}/>
              <br />
              <select name="category" onChange={(e)=>handleData(e)}>
                <option>Categories</option>
                {categories&&categories.map((value)=>(
                  <option value={value._id} key={value._id}>{value.name}</option>
                ))}
              </select><br/>
              <select name="product_status" onChange={(e)=>handleData(e)}>
                <option>product status</option>
                <option value="true">In Stock</option>
                <option value="false">Out of stock</option>
              </select>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProducts;
