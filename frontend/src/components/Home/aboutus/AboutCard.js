import React from 'react';
import './AboutCard.css'
function AboutCard() {
  return (
    <div className='about-card-bg'>
      <div className='about-card-text'>
        <h1>How we work</h1>
        <img src="https://cdn.shopify.com/s/files/1/0716/7367/6072/files/01_358x358_5ae33bff-204b-4816-bb1b-21ca1ff394d0.gif?v=1675932972" className='about-us-img1-small'/>
        <p>The most obvious function of clothing is to protect the wearer from the elements. It serves to prevent wind damage and provides protection from sunburn. Art is powerful because it can potentially influence our culture, politics, and even the economy.</p>
        <button className='about-card-button'>READ MORE</button>
      </div>
      <div className='about-card-images'>
        <img src="https://cdn.shopify.com/s/files/1/0716/7367/6072/files/01_358x358_5ae33bff-204b-4816-bb1b-21ca1ff394d0.gif?v=1675932972" className='about-us-img1'/>
        <img src="https://cdn.shopify.com/s/files/1/0716/7367/6072/files/01_407x487_77c52dda-fc66-4af5-8ff2-9e1127e6e9cb.gif?v=1675932982" className='about-us-img2'/>
      </div>
    </div>
  );
}

export default AboutCard;
