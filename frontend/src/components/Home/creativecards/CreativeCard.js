import React from 'react';
import './CreativeCard.css';


function CreativeCard() {
  return (
    <div className="creative-card-bg">
        <div className='creative-image-bg'>
            <img src="https://cdn.shopify.com/s/files/1/0716/7367/6072/files/01_494x535_2c444257-7444-484a-9c9c-b613ab46405b.gif?v=1675932"/>
        </div>
        <div className='creative-card-content'>
            <h1><span>Creativity </span>is greatest rebblion in existance.</h1>
            <p className='creative-card-para'>The most obvious function of clothing is to protect the wearer from the elements. It serves to prevent wind damage and provides protection from sunburn.</p>
            <button className='creative-card-button'>DISCOVER NOW</button>
        </div>
    </div>
  );
}

export default CreativeCard;
