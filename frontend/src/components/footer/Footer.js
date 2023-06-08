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
    <>
      <div className="news-letter-container">
        <h1 className="news-letter-heading">Join Our Newsletter</h1>
        <div className="news-letter-input-container">
          <input type="text" placeholder="Enter your email" className="news-letter-input"/>
          <button className="news-letter-button">Subscribe</button>
        </div>
      </div>
      <div className="footer-bg">
        <div className="footer-social-media">
          <div className="footer-social-media-logo">
            <img src={logo} />
            <h1>Palette tales</h1>
          </div>
          <p className="footer-social-media-text">
            Dummies has always stood for taking on complex concepts and making
            them easy to understand.
          </p>
          <div>
            <FacebookOutlinedIcon />
            <PinterestIcon />
          </div>
        </div>
        <div className="footer-terms-container">
          <div className="footer-terms-heading-container">
          <h2>Quick Links</h2>
          </div>
          <div>
            <p>Faq's | Contact Us | About Us |</p>
            <p>Privacy Policy | Terms and conditions |</p>
          </div>
        </div>
        <div className="footer-contact-details-bg">
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
        </div>
      </div>
      <div className="copyright-container">
        <p>&#169;2023, Palette Tales by Akash Nagineni</p>
      </div>
    </>
  );
}

export default Footer;
