import React from "react";
import "./Category.css";

function Category() {

    const category_images=[
        {
            src:"https://cdn.shopify.com/s/files/1/0716/7367/6072/files/380-493_02.png?v=1675932827",
            category:"Original Paintings"
        },
        {
            src:"https://cdn.shopify.com/s/files/1/0716/7367/6072/files/380-493_03.png?v=1675932845",
            category:"Art Products"
        },
        {
            src:"https://cdn.shopify.com/s/files/1/0716/7367/6072/files/380-493.png_03.png?v=1675932792",
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
