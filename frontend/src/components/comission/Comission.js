import React,{useContext, useState,useEffect} from "react";
import "./Comission.css";
import { UserContext } from "../../context/context";
import { disableScroll,enableScroll } from "../../functions/functions";
import { motion,AnimatePresence } from "framer-motion";
import axios from "axios";
import { useAuth } from "../../context/auth";


function Comission() {
  const [data,setData] = useState({name:"",phone:"",email:"",requirements:""});
  const {navStatus,setNavStatus}=useContext(UserContext);
  // const [navStatus,setNavStatus]=useAuth();

  if(navStatus){
    disableScroll()
  }else{
    enableScroll();
  }

  const handleData = (e)=>{
    setData((prevState)=>{
      return {
        ...prevState,[e.target.name]:e.target.value,
      }
    })
  }

  const handleSubmit= async ()=>{
    let res = await axios.post('https://palette-tales.onrender.com/comissions',{
      name:data.name,
      phone:data.phone,
      email:data.email,
      requirements:data.requirements
    })
    if(res.data.success){
      console.log(res.data.message);
    }
    else{
      console.log(res.data.message);
    }
  }

  return (
    <AnimatePresence>
    <motion.div       
    inital={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:5}}>
    <div>
      <div className="comission-page-heading-container">
      </div>
      <div className="comission-bg">
        <div className="comission-card-content">
          <div className="comission-card-content-container">
          <h1 className="comission-card-content-heading">
            Customized Paintings
          </h1>
          <div className="comission-card-image-small">
          <img src="https://static.wixstatic.com/media/112644_09e29a69a31f4cb08d30cea9943def67~mv2.jpg/v1/fill/w_638,h_538,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/112644_09e29a69a31f4cb08d30cea9943def67~mv2.jpg" />
        </div>
          <p className="comission-card-content-para">
            Hello!!<br/> We also take customized orders. <br/>The paintings are made with
            high quality artist grade supplies. So if you're looking for
            anything hand painted to either gift your loved ones or just to add
            colors to your space, we're here for you.
          </p>
          </div>
          <div className="comission-card-form-container">
            <div className="comission-card-container">
              <div className="comission-form-name-container">
                <input
                  type="text"
                  placeholder="Name"
                  className="comission-form-name"
                  name="name"
                  onChange={e=>handleData(e)}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="comission-form-phone"
                  name="phone"
                  onChange={e=>handleData(e)}
                />
              </div>
              <div className="comission-form-email-container">
                <input
                  type="text"
                  placeholder="Email"
                  className="comission-form-email"
                  name="email"
                  onChange={e=>handleData(e)}
                />
              </div>
              <div className="comission-form-comment-container">
                <textarea
                rows="10"
                  placeholder="Requirements"
                  className="comission-form-comment"
                  name="requirements"
                  onChange={e=>handleData(e)}
                ></textarea>
              </div>
              <div>
              <button className="comission-button" onClick={handleSubmit}>Send</button>
              </div>
            </div>
          </div>
        </div>
        <div className="comission-card-image">
          <img src="https://static.wixstatic.com/media/112644_e24d786acbad412894dfee594da3305b~mv2.jpg/v1/fill/w_581,h_755,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/112644_e24d786acbad412894dfee594da3305b~mv2.jpg" />
        </div>
      </div>
    </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default Comission;
