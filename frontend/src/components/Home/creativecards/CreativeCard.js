import React from 'react';
import './CreativeCard.css';
import { useNavigate } from 'react-router-dom';


function CreativeCard() {
  const navigate=useNavigate();
    return (
    <div className="creative-card-bg">
        <div className='creative-image-bg'>
            <img src="https://static.wixstatic.com/media/112644_50c0eedd23aa4eb6bc24a61e84f03826~mv2.jpg/v1/fill/w_696,h_696,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_8902_edited.jpg"/>
        </div>
        <div className='creative-card-content'>
            <h1>2023 Calenders</h1>
            <p className='creative-card-para'>The most obvious function of clothing is to protect the wearer from the elements. It serves to prevent wind damage and provides protection from sunburn.</p>
            <button className='creative-card-button' onClick={()=>navigate('/home/2023-calenders')}>SHOP NOW</button>
        </div>
    </div>
  );
}

export default CreativeCard;
