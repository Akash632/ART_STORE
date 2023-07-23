import React, {useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function CategoryWise() {
  const params = useParams();
  const [products, setProducts] = useState();
  const navigate=useNavigate();
  const[loading,setLoading]=useState(true);

  useEffect(() => {
    axios
      .get(
        `https://palette-tales.onrender.com/api/v1/products/getProductsByCategory/${params.value}`
      )
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  });
  return (
    <div className="shop-container-category-main">
      {products?(      <div className="shop-container-bg">
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
      </div>):(
        <div className="category-spinner">
          <ClipLoader color="#1b52a6" loading={loading}/>
        </div>
      )}
    </div>
  );
}

export default CategoryWise;
