import React from "react";
import "./Category.css";

function Category() {

    const category_images=[
        {
            src:"https://static.wixstatic.com/media/112644_c04b8549ce654194a20ca5efeae88d58~mv2.jpg/v1/fill/w_468,h_1023,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/112644_c04b8549ce654194a20ca5efeae88d58~mv2.jpg",
            category:"Original Paintings"
        },
        {
            src:"https://static.wixstatic.com/media/112644_670a5eddc86245c3b0f9d9de82856694~mv2.jpg/v1/fill/w_465,h_1023,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/112644_670a5eddc86245c3b0f9d9de82856694~mv2.jpg",
            category:"Art Products"
        },
        {
            src:"https://static.wixstatic.com/media/112644_5d9ed30259ff4edd916779d7aaf8d4dc~mv2.jpg/v1/fill/w_465,h_1023,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/112644_5d9ed30259ff4edd916779d7aaf8d4dc~mv2.jpg",
            category:"Canvas Paintings"
        }
    ]
  return (
    <div className="category-card-bg">
      <div className="shop-heading">
        <h1>SHOP</h1>
      </div>
      <div className="category-card-images-container">
      {category_images.map((value,index)=>(
        <div key={index} className="category-card-container">
            <img src={value.src}/>
            <button className="category-card-button">{value.category}</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Category;
