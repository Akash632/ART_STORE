import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Email, PhoneAndroidOutlined } from "@mui/icons-material";
// import {BsPinterest} from 'react-icons/bs'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PinterestIcon from '@mui/icons-material/Pinterest';
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
              <h1>PALETTE TALES</h1>
            </div>
            <p className="footer-social-media-text">
              We hope you found what you were looking
              <br /> Have something else in mind?
              <br /> You can now book a custom painting! Yes!
            </p>
            <button className="footer-social-media-btn">Let's do it</button>
          </div>
          <div className="footer-right-container">
          <div className="footer-terms-container">
            <div className="footer-terms-heading-container">
              <h2>Quick Links</h2>
            </div>
            <div className="footer-terms-content-main-container">
              <div className="footer-terms-content-container">
                <p>Returns and Cancellations</p>
                <p>Shop Policy</p>
                <p>Terms and Conditions</p>
              </div>
              <div className="footer-terms-content-container-small">
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
          <div className="footer-terms-container">
            <div className="footer-social-terms-heading-container">
              <h2>Social Media</h2>
            </div>
            <div className="footer-social-content-container">
              <div className="footer-terms-icons-container">
                <InstagramIcon/>
                <p>Instagram</p>
              </div>
              <div className="footer-terms-icons-container">
                <PinterestIcon/>
                <p>Pinterest</p>
              </div>
              <div className="footer-terms-icons-container">
              <MailOutlineIcon/>
              <p>Gmail</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <p>&#169;2023, Palette Tales by Akash Nagineni</p>
      </div>
    </div>
  );
}

export default Footer;
