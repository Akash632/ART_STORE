import React from "react";
import "./Contact.css";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

function Contact() {
  return (
    <div>
      <div className="contact-poster-container">
        <img src="https://cdn.shopify.com/s/files/1/0716/7367/6072/files/1500-300.png?v=1676004063" />
      </div>
      <div className="contact-details-main-container">
        <div className="contact-details-container">
          <h1>Our Information</h1>
          <p>
            Our web company consists of web programmers and designers with
            extensive experience in the web market. Each of us worked as hired
            worker to create templates for Magento, Shopify, Wordpress and
            others.
          </p>
          <div className="contact-details">
            <div className="contact-details-logo">
              <CottageOutlinedIcon
                style={{ fontSize: "30px", marginRight: "10px" }}
              />
            </div>
            <p>Vijayawada,Andhra Pradesh</p>
          </div>
          <div className="contact-details">
            <div className="contact-details-logo">
              <EmailOutlinedIcon style={{ fontSize: "30px", marginRight: "10px"  }} />
            </div>
            <p>palettetales@gmail.com</p>
          </div>
          <div className="contact-details">
            <div className="contact-details-logo">
              <CallOutlinedIcon style={{ fontSize: "30px", marginRight: "10px"  }} />
            </div>
            <p>+91-9052777513</p>
          </div>
        </div>
        <div className="form-main-container">
          <h1>Get in touch</h1>
          <div className="contact-input-form-container">
          <div className="form-name-container">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="form-name"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="form-phone"
            />
          </div>
          <div className="form-email-container">
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="form-email"
            />{" "}
          </div>
            <textarea
              placeholder="Comment"
              name="comment"
              className="form-comment"
              rows="5" cols="10"
            ></textarea>
          </div>
          <button className="contact-card-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
