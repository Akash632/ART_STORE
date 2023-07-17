import React from "react";
import "./AboutCard.css";
import { useNavigate } from "react-router-dom";
function AboutCard() {
  const navigate=useNavigate();
  return (
    <div className="about-card-main-container">
      <div className="about-card-bg">
        <div className="about-card-text">
          <h1>Made for you!</h1>
          <img
            src="https://static.wixstatic.com/media/112644_09e29a69a31f4cb08d30cea9943def67~mv2.jpg/v1/fill/w_638,h_538,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/112644_09e29a69a31f4cb08d30cea9943def67~mv2.jpg"
            className="about-us-img1-small"
          />
          <p>
            Hello!!<br/> We also take customized orders. <br/>The paintings are made with
            high quality artist grade supplies. So if you're looking for
            anything hand painted to either gift your loved ones or just to add
            colors to your space, we're here for you.
          </p>
          <button className="about-card-button" onClick={()=>navigate('/comissions')}>KNOW MORE</button>
        </div>
        <div className="about-card-images">
          <img
            src="https://static.wixstatic.com/media/112644_5872584ce0414a0583babe142dc9a797~mv2.jpg/v1/fill/w_581,h_755,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/112644_5872584ce0414a0583babe142dc9a797~mv2.jpg"
            className="about-us-img2"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
