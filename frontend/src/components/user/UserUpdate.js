import { useState, useContext, useEffect } from "react";
import UserDashboardMenu from "./UserDashboardMenu";
import { UserContext } from "../../context/context";
import { useParams } from "react-router-dom";
import axios from "axios";
function UserUpdate() {
  // const [auth,setAuth]=useAuth();
  const { auth, setAuth } = useContext(UserContext);
  const [values, setValues] = useState();
  const params = useParams();

  useEffect(()=>{
    setValues(auth.user);
    console.log(values);
  },[auth.user])

  const handleChange = (e)=>{
    setValues((prevState)=>{
        return {
            ...prevState,[e.target.name]:e.target.value,
        }
    })
    console.log(values);
  }

  const handleUpdate = async ()=>{
    const {data} = await axios.put('http://localhost:5000/api/v1/auth/update-user',values);
    if(data.success){
        setAuth({...auth,user:data?.data});
        let ls = localStorage.getItem('auth');
        ls = JSON.parse(ls);
        ls.user = data.data;
        localStorage.setItem('auth',JSON.stringify(ls));
    }
  }

  return (
    <div>
      <div className="admin-heading-container"></div>
      <div className="admin-dashboard-main-container">
        <div className="admin-dashboard-menu-container">
          <UserDashboardMenu />
        </div>
        <div className="update-user-dashboard-content-container">
          <h1>Update user</h1>
          {values?(<div className="update-user-card-main-container">
            <div className="update-user-card-container">
            <input type="text" name="name" value={values.name} onChange={(e)=>handleChange(e)}/>
            <br />
            <input type="text" name="email" value={values.email} onChange={(e)=>handleChange(e)} disabled/>
            <br />
            <input type="text" name="phone" value={values.phone} onChange={(e)=>handleChange(e)}/>
            <br />
            <input type="text" name="address" value={values.address} onChange={(e)=>handleChange(e)}/>
          </div>
          <div className="update-user-btn-container">
            <button onClick={()=>handleUpdate()}>
            Update
            </button>
          </div>
          </div>):<h1>Loading</h1>}
        </div>
      </div>
    </div>
  );
}

export default UserUpdate;
