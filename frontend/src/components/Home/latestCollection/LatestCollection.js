import React from 'react';
import './LatestCollection.css';
import { useNavigate } from 'react-router-dom';
function LatestCollection() {
    const latestCollecton =[
        {   
            id:'6480c28f7e6a395c986123c5',
            src:"https://cdn.shopify.com/s/files/1/0716/7367/6072/products/12.gif?v=1676007161",
            title:"Classic Door",
            original_price:"Rs.3,700",
            discount_price:"Rs.3,522",
            offer:"4% OFF"
        },
        {   
            id:"6480c28f7e6a395c986123c6",
            src:"https://cdn.shopify.com/s/files/1/0716/7367/6072/products/10.gif?v=1676007068",
            title:"Sun Flower",
            original_price:"Rs.2,400",
            discount_price:"Rs.1,930",
            offer:"5% OFF"
        },
        {   
            id:"6480c28f7e6a395c986123c7",
            src:"https://cdn.shopify.com/s/files/1/0716/7367/6072/products/01_a32ab651-5427-4f40-ad0f-e95182c446a7.gif?v=1676007120",
            title:"Jungle Art",
            original_price:"Rs.3,700",
            discount_price:"Rs.3,522",
            offer:"19% OFF"
        },
        {   
            id:"6480c28f7e6a395c986123c8",
            src:"https://cdn.shopify.com/s/files/1/0716/7367/6072/products/09.gif?v=1676005190",
            title:"Nature Brush",
            original_price:"Rs.2,100",
            discount_price:"Rs.1,870",
            offer:"19% OFF"
        }
    ]
    const navigate = useNavigate();
  return (
    <div className='latest-collection-bg'>
      <div className='latest-collection-heading'>
        <h1>Fresh from the Collection</h1>
      </div>
      <div className='latest-collection-image-bg'>
        {latestCollecton.map((value,index)=>(
            <div key={index} className='latest-collection-image-container' onClick={()=>navigate(`${value.id}`)}>
                <div className='latest-card-container'>
                    <img src={value.src} className='latest-collection-image'/>
                    <div className='latest-offer-card'>
                        <span>{value.offer}</span>
                    </div>
                </div>
                <div className='latest-collection-text'>
                    <h1>{value.title}</h1>
                    <div className='latest-price-container'>
                        <span className='latest-collection-original-price'>{value.original_price}  </span>
                        <span className='latest-collection-price'>{value.discount_price}</span>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default LatestCollection;
