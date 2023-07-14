import React, {useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CategoryWise() {
  const params = useParams();
  const [products, setProducts] = useState();
  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/v1/products/getProductsByCategory/${params.value}`
      )
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  });
  return (
    <div className="shop-container-main">
      <div className="shop-container-bg">
        {products && products.map((value) => (
              <div
                className="shop-image-container-bg"
                key={value._id}
                onClick={() => navigate(`/shop/${value._id}`)}
              >
                <div className="shop-image-container">
                  <img src={value.image_src} />
                </div>
                <div className="shop-card-text-container">
                  <h1>{value.title}</h1>
                  <div className="shop-card-price-container">
                    <span className="shop-card-discount-price">
                      Rs.{value.original_price}
                    </span>
                    {value.discount_price && (
                      <span className="shop-card-discount-price">
                        {value.discount_price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default CategoryWise;
