import React,{useState,useEffect} from 'react';
import './LatestBlog.css';
import {useNavigate} from 'react-router-dom';

function LatestBlog() {


  const navigate = useNavigate();
    const latestBlogs=[
        {
            src:"https://cdn.shopify.com/s/files/1/0716/7367/6072/articles/01.gif?v=1675933249",
            title:"Classic Color of Art",
            description:"Art, also called (to distinguish it from other art forms) visual art, a visual object or experience consciously created...",
            date:"February 9, 2023"
        },
        {
            src:"https://cdn.shopify.com/s/files/1/0716/7367/6072/articles/04.gif?v=1675933317",
            title:"Painting Art Awesome",
            description:"Art, also called (to distinguish it from other art forms) visual art, a visual object or experience consciously created...",
            date:"February 9, 2023"
        }
    ]

    const blogNavigate = () =>{
      navigate('/blog')
    }
  return (
    <div className='latest-blog-bg'>
      <div className='latest-blog-text-container'>
        <h1>Our Latest Blogs</h1>
      </div>
      <div className='latest-blog-image-container'>
        {latestBlogs.map((value,index)=>(
            <div className='latest-blog-images' key={index}>
                <img src={value.src}/>
                <h1>{value.title}</h1>
                <p>{value.description}</p>
                <p>{value.date}</p>
            </div>
        ))}
      </div>
      <div>
        <button className='latest-blog-card-button' onClick={blogNavigate}>VIEW ALL</button>
      </div>
    </div>
  );
}

export default LatestBlog;
