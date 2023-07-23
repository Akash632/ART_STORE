import React,{useState,useEffect} from "react";
import AdminMenu from "../AdminMenu";
import "../AdminDashboard.css";
import Form from "./Form";
import axios from "axios";
import { toast } from "react-toastify";
function CreateCategory() {
  const [data,setData]=useState();
  const [name,setName]=useState("");
  const [update,setUpdate]=useState("");
  const [postId,setPostId]= useState("");

  const getCategory = async()=>{
    const res=await axios.get('https://palette-tales.onrender.com/api/v1/category/get-categories');
    if(res.data.success){
      setData(res.data.categories);
      console.log(res.data);
    }else{
      console.log(res.data.message)
    }
  }

  const createCategory = async () =>{
    const res = await axios.post('https://palette-tales.onrender.com/api/v1/category/create-category',{
      name
    });
    if(res.data.success){
      toast(res.data.message);
      setName("");
      getCategory();
    }else{
      console.log(res.data.message);
    }
  }

  const handleUpdate = (id,text)=>{
    setName(text);
    setUpdate(true);
    setPostId(id);
    console.log(postId);
  }
  const updateCategory = async ()=>{
     const res = await axios.put(`https://palette-tales.onrender.com/api/v1/category/update-category/${postId}`,{
      name
    });
    console.log(res);
    if(res.data.success){
      getCategory();
      setUpdate(false);
      setName("");
    }    // console.log("Hello")
  }
  const deleteCategory=async (itemId)=>{
    axios.delete(`https://palette-tales.onrender.com/api/v1/category/delete-category/${itemId}`)
    .then((res)=>{
      if(res.data.success){
        getCategory();
      }
    })
    .catch((err)=>console.log(err));
    console.log(itemId);
  }

  useEffect(()=>{
    getCategory();
  },[]);
  return (
    <>
    <div className="admin-heading-container"></div>
        <div className="admin-dashboard-main-container">
      <div className="admin-dashboard-menu-container">
        <AdminMenu/>
      </div>
      <div className="admin-dashboard-category-container">
        <div className="create-category-heading-container">
          <h1 className="admin-update-heading">Create category</h1>
          <div className="create-category-input">
          <Form value={name} setValue={setName} handleCreate={createCategory} update={update} handleUpdate={updateCategory}/>
          </div>
        </div>
        <div className="admin-category-card-container">
          {data&&data.map((item)=>(
            <div key={item._id} className="admin-category-card">
          <p>{item.name}</p>
          <div className="admin-category-btn-container">
            <button onClick={()=>{handleUpdate(item._id,item.name)}}>Edit</button>
            <button onClick={()=>{deleteCategory(item._id)}}>Delete</button>
          </div>
        </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default CreateCategory;
