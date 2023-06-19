import React,{useContext} from "react";
import './Blog.css';
import { UserContext } from "../../context/context";
import { disableScroll,enableScroll } from "../../functions/functions";


function Blog() {
  const {navStatus,setNavStatus}=useContext(UserContext);
  if(navStatus){
    disableScroll()
  }else{
    enableScroll();
  }
  const blogs = [
    {
      src: "https://cdn.shopify.com/s/files/1/0716/7367/6072/articles/08.gif?v=1675933370&width=360",
      title: "Painting Art Awesome",
      description:
        "Art, also called (to distinguish it from other art forms) visual art, a visual object or experience consciously created...",
      date: "February 9, 2023",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0716/7367/6072/articles/01.gif?v=1675933249",
      title: "Classic Color of Art",
      description:
        "Art, also called (to distinguish it from other art forms) visual art, a visual object or experience consciously created...",
      date: "February 9, 2023",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0716/7367/6072/articles/02.gif?v=1675933282",
      title: "Classic Color of Art",
      description:
        "Art, also called (to distinguish it from other art forms) visual art, a visual object or experience consciously created...",
      date: "February 9, 2023",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0716/7367/6072/articles/04.gif?v=1675933317",
      title: "Painting Art Awesome",
      description:
        "Art, also called (to distinguish it from other art forms) visual art, a visual object or experience consciously created...",
      date: "February 9, 2023",
    },
  ];
  return (
    <div className="blog-container-bg">
      {/* <div className="blog-heading-container">
        <h1 className="blog-heading">Stories & Ideas</h1>
      </div> */}
      <div className="blog-cards-container">
        {
          blogs.map((value,index)=>(
            <div className="blog-card" key={index}>
              <img src={value.src}/>
              <h1>{value.title}</h1>
              <p>{value.description}</p>
              <span>{value.date}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Blog;
