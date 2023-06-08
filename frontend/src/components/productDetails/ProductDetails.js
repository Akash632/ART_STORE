import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const params = useParams();
  const [data, setData] = useState();

  console.log(params.id);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/products/${params.id}`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product-details-bg-container">
      {data ? (
        data.map((value) => (
          <div className="product-details-section">
            <div className="product-details-image-section">
              <div className="product-details-main-image">
              <img src={value.image_src} />
              </div>
              <div className="product-details-more-images">
                {value.related_images.map((images)=>(
                  <img src={images}/>
                ))}
              </div>
            </div>
            <div className="product-details-description-section">
              <h1 className="product-details-section-heading">{value.title}</h1>
              <div className="product-details-discount-container">
                <span className="product-details-section-discount-card">
                  {value.discount}
                </span>
              </div>
              <div className="product-details-price-container">
                <span className="product-details-section-original-price">
                  {value.original_price}
                </span>
                <span className="product-details-section-discount-price">
                  {value.discount_price}
                </span>
              </div>
              <div className="product-details-section-quantity-container">
                <h1 className="product-details-section-quantiy-heading">
                  Quantity
                </h1>
                <div className="product-details-section-quantity-button-container">
                  <button>-</button>
                  <div>1</div>
                  <button>+</button>
                </div>
              </div>
              <div className="product-details-section-button-container">
                <button className="product-details-section-btn">
                  Add to cart
                </button>
                <button className="product-details-section-btn">Buy now</button>
              </div>
              <div className="product-details-info-container">
                <h1>Product Info</h1>
                <ul className="product-details-list">
                  {value.product_info.map((data) => (
                    <li>{data}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>LOADING</h1>
      )}
    </div>
  );
}

export default ProductDetails;
