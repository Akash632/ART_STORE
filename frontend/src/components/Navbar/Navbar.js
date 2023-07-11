import React, { useEffect,useContext, useState } from "react";
import "./Navbar.css";
import logo2 from '../../assets/logo2.jpg';
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate, useLocation } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { UserContext } from "../../context/context";
// import { useAuth } from "../../context/auth";

function Navbar() {
  const {navStatus,setNavStatus} = useContext(UserContext);

  // const [navStatus,setNavStatus]=useAuth();
  const [nav,setNav] = useState(false);
  const [style,setStyle]=useState("none");

  // const [selectNav,setSelectNav] = useState();

  const changeNav = () =>{
      setNavStatus(!navStatus);
      console.log("Hello");
      console.log(navStatus);
  }
const handleNav=()=>{
  setNavStatus(false);
}


  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/");
    }
  }, []);


  const styles = { color: "#394a6e", fontSize: "35px" };
  return (
    <div className="navbar-main-container">
    <div className="navbar-top-section">
      <p>For International orders contact us directly</p>
    </div>
    <div className="navbar-bg">
      <div className="navbar-ham-burger" onClick={changeNav}>
        {navStatus ? <CloseIcon/>:<MenuIcon/> }
      </div>
      <div className="navbar-logo" onClick={()=>navigate('/')}>
        <p className="nav-welcome-heading">Welcome to,</p>
        <h1 className="navbar-heading">PALETTE TALES</h1>
      </div>
      <div className={navStatus?"navbar-options nav-options-active":"navbar-options"}>
        <Link to="/" style={{textDecoration:"none"}}>
        <p className="navbar-options-button" onClick={handleNav} >Home</p>
        </Link>
        <Link to="/shop" style={{textDecoration:"none"}}>
        <p className="navbar-options-button" onClick={handleNav}>Shop</p>
        </Link>
        <Link to="/comissions" style={{textDecoration:"none"}}>
          <p className="navbar-options-button" onClick={handleNav}>Comissions</p>
        </Link>
        <Link to="/blog" style={{textDecoration:"none"}}>
        <p className="navbar-options-button" onClick={handleNav}>About</p>
        </Link>
        <Link to="/contact" style={{textDecoration:"none"}}>
        <p className="navbar-options-button" onClick={handleNav}>Contact</p>
        </Link>
      </div>
            <div className="navbar-icons">
        <div className="navbar-icon-container" onClick={()=>navigate("/cart")}>
          <ShoppingBasketOutlinedIcon style={styles}/>
        </div>
        <Link to='/login'>
        <div>
          <PersonOutlineOutlinedIcon style={styles} />
        </div>
        </Link>
      </div>
      <div className="navbar-icons-small">
      <div className="navbar-icon-container">
        <ShoppingBasketOutlinedIcon style={{fontSize:"25px",color:"#394a6e"}}/>
        </div>
        <Link to='/login'>
        <div>
          <PersonOutlineOutlinedIcon style={{fontSize:"25px",color:"#394a6e"}} />
        </div>
        </Link>
      </div>
    </div>
  
    </div>
  );
}

export default Navbar;