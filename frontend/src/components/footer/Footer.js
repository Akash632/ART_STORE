import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Email, PhoneAndroidOutlined } from "@mui/icons-material";
// import {BsPinterest} from 'react-icons/bs'
function Footer() {
  return (
    <div className="footer-main-container">
      <div className="news-letter-main-container">
        <div className="news-letter-container">
          <h1 className="news-letter-heading">Join Our Newsletter</h1>
          <div className="news-letter-input-container">
            <input
              type="text"
              placeholder="Enter your email"
              className="news-letter-input"
            />
            <button className="news-letter-button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bg-main">
        <div className="footer-bg">
        <div className="footer-social-media">
          <div className="footer-social-media-logo">
            {/* <img src={logo} /> */}
            <h1>PALETTE TALES</h1>
          </div>
          <p className="footer-social-media-text">
            We hope you found what you were looking for!<br/> Have something else in
            mind?<br/> You can now book a custom painting! Yes!
          </p>
          {/* <div>
            <FacebookOutlinedIcon />
            <PinterestIcon />
          </div> */}
          <button className="footer-social-media-btn">Let's do it</button>
        </div>
        <div className="footer-terms-container">
          <div className="footer-terms-heading-container">
            <h2>Quick Links</h2>
          </div>
          <div>
            <ul>
              <li>Returns and Cancellations</li>
              <li>Shop Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        </div>
        {/* <div className="footer-contact-details-bg">
          <div className="footer-contact-sub-container">
          <div className="footer-contact-details">
            <div className="footer-contact-details-logo">
              <CottageOutlinedIcon style={{ fontSize: "35px" ,marginRight:'10px'}} />
            </div>
            <p>Vijayawada,Andhra Pradesh</p>
          </div>
          <div className="footer-contact-details">
            <div className="footer-contact-details-logo">
              <EmailOutlinedIcon style={{ fontSize: "35px" ,marginRight:'10px'}} />
            </div>
            <p>palettetales@gmail.com</p>
          </div>
          <div className="footer-contact-details">
            <div className="footer-contact-details-logo">
              <CallOutlinedIcon style={{ fontSize: "35px" ,marginRight:'10px'}} />
            </div>
            <p>+91-9052777513</p>
          </div>
          </div>
        </div> */}
      </div>
      {/* <div className="copyright-container">
        <p>&#169;2023, Palette Tales by Akash Nagineni</p>
      </div> */}
    </div>
  );
}

export default Footer;
