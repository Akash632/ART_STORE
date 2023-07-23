import React, { useState,useEffect } from 'react';
import './LatestCollection.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function LatestCollection() {
    const [latestCollection,setLatestCollection]=useState();
    // const latestCollecton =[
    //     {   
    //         id:'6480c28f7e6a395c986123c5',
    //         src:"https://static.wixstatic.com/media/112644_45ae2642bba04a6dbf6830a7b7c9bb33~mv2.jpeg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/112644_45ae2642bba04a6dbf6830a7b7c9bb33~mv2.jpeg",
    //         title:"Classic Door",
    //         original_price:"Rs.3,700",
    //         discount_price:"Rs.3,522",
    //         offer:"4% OFF"
    //     },
    //     {   
    //         id:"6480c28f7e6a395c986123c6",
    //         src:"https://static.wixstatic.com/media/112644_366a17440b644e979372726f56ca4c37~mv2.jpeg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/112644_366a17440b644e979372726f56ca4c37~mv2.jpeg",
    //         title:"Sun Flower",
    //         original_price:"Rs.2,400",
    //         discount_price:"Rs.1,930",
    //         offer:"5% OFF"
    //     },
    //     {   
    //         id:"6480c28f7e6a395c986123c7",
    //         src:"https://static.wixstatic.com/media/112644_5ebdb85063b64f94b746b31c768b5435~mv2.jpeg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/112644_5ebdb85063b64f94b746b31c768b5435~mv2.jpeg",
    //         title:"Jungle Art",
    //         original_price:"Rs.3,700",
    //         discount_price:"Rs.3,522",
    //         offer:"19% OFF"
    //     },
    //     {   
    //         id:"6480c28f7e6a395c986123c8",
    //         src:"https://static.wixstatic.com/media/112644_13ff2c4e3f4b4fe3a00e45a70b54c7e1~mv2.jpeg/v1/fill/w_625,h_834,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/112644_13ff2c4e3f4b4fe3a00e45a70b54c7e1~mv2.jpeg",
    //         title:"Nature Brush",
    //         original_price:"Rs.2,100",
    //         discount_price:"Rs.1,870",
    //         offer:"19% OFF"
    //     }
    // ]

    const getData= async ()=>{
        const res = await axios.get("https://palette-tales.onrender.com/api/v1/products/getproducts")
        setLatestCollection(res.data.products)
    }
    useEffect(()=>{
        getData();
    })
    const navigate = useNavigate();
  return (
    <div className='latest-collection-bg'>
      <div className='latest-collection-heading'>
        <h1>Fresh from the Collection</h1>
      </div>
      <div className='latest-collection-image-bg'>
        {latestCollection&&latestCollection.slice(0,4).map((value,index)=>(
            <div key={index} className='latest-collection-image-container' onClick={()=>navigate(`/shop/${value._id}`)}>
                <div className='latest-card-container'>
                    <img src={value.image_src} className='latest-collection-image'/>
                </div>
                <div className='latest-collection-text'>
                    <h1>{value.title}</h1>
                    <div className='latest-price-container'>
                        <span className='latest-collection-price'>Rs. {value.original_price}  </span>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default LatestCollection;
