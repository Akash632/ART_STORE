import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { UserContext } from "../../context/context";
import { disableScroll, enableScroll } from "../../functions/functions";

function ProductDetails() {
  const {navStatus,setNavStatus}=useContext(UserContext);
  if(navStatus){
    disableScroll()
  }else{
    enableScroll();
  }
  const params = useParams();
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/products/getProducts/${params.id}`)
      .then((response) => setData(response.data.details))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product-details-bg-container">
      {data ? (
        <div className="product-details-section">
            <div className="product-details-main-image">
              <img src={data.image_src} />
            </div>
          <div className="product-details-description-section">
            <h1 className="product-details-section-heading">{data.title}</h1>
            <div className="product-details-discount-container">
              {data.discount && (
                <span className="product-details-section-discount-card">
                  {data.discount}
                </span>
              )}
            </div>
            <div className="product-details-price-container">
              {data.discount_price && (
                <span className="product-details-section-original-price">
                  Rs, {data.original_price}
                </span>
              )}
              <span className="product-details-section-discount-price">
                Rs.{data.original_price}
              </span>
            </div>
            <div className="product-details-section-quantity-container">
              <h1 className="product-details-section-quantiy-heading">
                Quantity
              </h1>
              <div className="product-details-section-quantity-button-container">
                {quantity <= 1 ? (
                  <button onClick={() => setQuantity(quantity - 1)} disabled>
                    -
                  </button>
                ) : (
                  <button onClick={() => setQuantity(quantity - 1)}>-</button>
                )}
                <div>{quantity}</div>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            {data.product_status==="true"? (
              <div className="product-details-section-button-container">
                <button className="product-details-section-btn">
                  Add to cart
                </button>
                <button className="product-details-section-buy-now">
                  Buy now
                </button>
              </div>
            ) : (
              <div className="product-details-section-button-container">
                <button className="product-details-section-buy-now" disabled>
                  Out of stock
                </button>
              </div>
            )}
            <div className="product-details-info-container">
              <h1>Product Info</h1>
              <ul className="product-details-list">
                {data.product_info.map((value) => (
                  <li>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h1>LOADING</h1>
      )}
    </div>
  );
}

export default ProductDetails;
