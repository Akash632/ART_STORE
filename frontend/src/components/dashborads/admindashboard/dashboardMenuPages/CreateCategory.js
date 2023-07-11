import React,{useState,useEffect} from "react";
import AdminMenu from "../AdminMenu";
import "../AdminDashboard.css";
import Form from "./Form";
import axios from "axios";
function CreateCategory() {
  const [data,setData]=useState();
  const [name,setName]=useState("");
  const [update,setUpdate]=useState("");
  const [postId,setPostId]= useState("");

  const getCategory = async()=>{
    const res=await axios.get('http://localhost:5000/api/v1/category/get-categories');
    if(res.data.success){
      setData(res.data.categories);
    }else{
      console.log(res.data.message)
    }
  }

  const createCategory = async () =>{
    const res = await axios.post('http://localhost:5000/api/v1/category/create-category',{
      name
    });
    if(res.data.success){
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
     const res = await axios.put(`http://localhost:5000/api/v1/category/update-category/${postId}`,{
      name
    });
    if(res.data.success){
      getCategory();
      setUpdate(false);
      setName("");
    }
     console.log(res);
    // console.log("Hello")
  }
  const deleteCategory=async (itemId)=>{
    const res = await axios.delete(`http://localhost:5000/api/v1/category/delete-category/${itemId}`);
    console.log(res);
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
      <div className="admin-dashboard-content-container">
        <div className="create-category-heading-container">
          <h1>Create category</h1>
          <Form value={name} setValue={setName} handleCreate={createCategory} update={update} handleUpdate={updateCategory}/>
        </div>
        <div>
          {data&&data.map((item)=>(
            <div key={item._id}>
          <p>{item.name}</p>
          <div>
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
