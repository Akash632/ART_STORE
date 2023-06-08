import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo2 from '../../assets/logo2.jpg';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink,Link, useNavigate, useLocation,Navigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [nav,setNav] = useState(false);

  const changeNav = () =>{
    setNav(!nav);
    console.log(nav);
  }

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);
  const styles = { color: "#372b28", fontSize: "35px" };
  return (
    <div className="navbar-main-container">
    <div className="navbar-top-section">
      <p>For International orders contact us directly</p>
    </div>
    <div className="navbar-bg">
      <div className="navbar-ham-burger" onClick={changeNav}>
        {nav ? <MenuIcon/>: <CloseIcon/>}
      </div>
      <div className="navbar-logo">
        <img src={logo2} className='navbar-logo-img'/>
        <h1>Palette tales</h1>
      </div>
      <div className="navbar-options">
        <NavLink to="/home" style={{textDecoration:"none"}}>
        <p className="navbar-options-button">Home</p>
        </NavLink>
        <NavLink to="/shop" style={{textDecoration:"none"}}>
        <p className="navbar-options-button">Shop</p>
        </NavLink>
        <NavLink to="/comissions" style={{textDecoration:"none"}}>
          <p className="navbar-options-button">Comissions</p>
        </NavLink>
        <NavLink to="/blog" style={{textDecoration:"none"}}>
        <p className="navbar-options-button">Blog</p>
        </NavLink>
        <NavLink to="/contact" style={{textDecoration:"none"}}>
        <p className="navbar-options-button">Contact</p>
        </NavLink>
      </div>
      <div className="navbar-icons">
        <div className="navbar-icon-container">
          <ShoppingBasketOutlinedIcon style={styles}/>
        </div>
        <div>
          <PersonOutlineOutlinedIcon style={styles} />
        </div>
      </div>
      <div className="navbar-icons-small">
      <div className="navbar-icon-container">
          <ShoppingBasketOutlinedIcon style={{fontSize:"25px"}}/>
        </div>
      <div>
          <PersonOutlineOutlinedIcon style={{fontSize:"25px"}} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
