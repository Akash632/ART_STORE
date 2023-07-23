import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { UserContext } from "../../context/context";
import { disableScroll, enableScroll } from "../../functions/functions";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

function ProductDetails() {
  const { navStatus, setNavStatus } = useContext(UserContext);
  const { cart, setCart } = useContext(UserContext);
  const { auth, setAuth } = useContext(UserContext);
  const [cartItems, setCartItems] = useState();
  const navigate = useNavigate();
  const [loading,setLoading]=useState(true);


  if (navStatus) {
    disableScroll();
  } else {
    enableScroll();
  }
  const params = useParams();
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    auth.user &&
      axios
        .get(`https://palette-tales.onrender.com/api/v1/cart/getCart/${auth.user._id}`)
        .then((res) => {
          if (res.data.success) {
            setCartItems(res.data.result);
          }
        })
        .catch((err) => console.log(err));

    axios
      .get(`https://palette-tales.onrender.com/api/v1/products/getProducts/${params.id}`)
      .then((response) => {
        setData(response.data.details);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    let cartItems = JSON.parse(localStorage.getItem("cart"));
    cartItems && setCart(cartItems);
  }, []);

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleCart = (id) => {
    let myCart = [...cart];
    let existingItem = myCart.filter(item=>item._id===id);
    if(existingItem.length>0){
      toast('Item already added to cart')
    }else{
    setCart([...cart, { ...data, quantity }]);
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...data, quantity }])
    );
    navigate('/cart');
    toast("Item added to cart");
    }
  };
  return (
    <div className={data?"product-details-bg-container":"product-details-bg-container-before"}>
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
            {data.product_status === "true" ? (
              <div className="product-details-section-button-container">
                <button
                  className="product-details-section-btn"
                  onClick={
                    auth.user
                      ? ()=>handleCart(data._id)
                      : handleNavigate
                  }
                >
                  Add to cart
                </button>
                <button className="product-details-section-buy-now" onClick={auth.user?()=>navigate(`/payement/${data._id}`):()=>navigate('/login')}>
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
              <div className="product-details-list">
                {data.product_info.map((value, index) => (
                  <p key={index}>{value}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-spinner">
          <ClipLoader color="#1b52a6" loading={loading} />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
