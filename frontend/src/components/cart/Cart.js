import React, { useState, useEffect, useContext } from "react";
import "./Cart.css";
import cartImg from "../../assets/cartImg.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/context";
import axios from "axios";
import { toast } from "react-toastify";
import DropIn from "braintree-web-drop-in-react";

function Cart() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(UserContext);
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

  const deleteCart = async (id) => {
    try {
      console.log(id);
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === id);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (err) {
      console.log(err);
    }
  };

  //payement gatway token

  const getToken = async () => {
    try {
      await axios
        .get("https://palette-tales.onrender.com/api/v1/products/braintree/token")
        .then((res) => {
          setClientToken(res.data.clientToken);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const handlePayement = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      await axios
        .post("https://palette-tales.onrender.com/api/v1/products/braintree/cartPayement", {
          nonce,
          cart,
        })
        .then((res) => {
          console.log(res);
          if (res.data.ok) {
            setLoading(false);
            setCart([]);
            localStorage.removeItem("cart");
            navigate("/dashboard/user/orders");
            toast("Order placed");
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getToken();

    let existingCart = localStorage.getItem("cart");
    if (existingCart) setCart(JSON.parse(existingCart));

    console.log(cart);
  }, []);

  return (
    <div className="cart-main-container">
      {cart && cart.length > 0 ? (
        <div className="cart-page-main-container">
          <div className="cart-products-container">
            {cart.map(
              (value, index) =>
                value && (
                  <div className="cart-products-cards-container">
                    <div className="cart-products-details-card">
                      <div className="cart-products-img-container">
                        <img src={value.image_src} />
                      </div>
                      <div className="cart-products-text-container">
                        <h3>{value.title}</h3>
                        <p>Rs. {value.original_price}</p>
                        <p>Quantity: {value.quantity}</p>
                      </div>
                    </div>
                    <div className="cart-products-price-container">
                      <div>
                        <p>{value.quantity * value.original_price}</p>
                        <p onClick={() => deleteCart(value._id)}>X</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="cart-products-checkout-main-container">
            <div className="cart-products-checkout">
              <div className="cart-products-checkout-heading">
                <h3>Order Summary</h3>
              </div>
              <div className="cart-products-checkout-subtotal-main-container">
                <div className="cart-products-subtotal-cart">
                  <p>Subtotal</p>
                  <p>
                    Rs.
                    {cart.reduce(
                      (acc, value) =>
                        value.original_price * value.quantity + acc,
                      0
                    )}
                  </p>
                </div>
                <div className="cart-products-subtotal-cart">
                  <p>Delivery</p>
                  <p>Rs. {Number(80)}</p>
                </div>
              </div>
              <div className="cart-products-coupon-container">
                <div className="cart-products-coupon-input">
                  <input type="text" placeholder="ENTER COUPON" />
                  <button className="cart-products-coupon-input-button">Apply</button>
                </div>
                <p></p>
              </div>
              <div className="cart-products-checkout-total">
                <h2>Total</h2>
                {cart ? (
                  <h2>Rs. 
                    {cart.reduce(
                      (acc, value) =>
                        value.original_price * value.quantity + acc,
                      80
                    )}
                  </h2>
                ) : (
                  <h2>0</h2>
                )}
              </div>
            </div>
            <div className="paypal-main-container">
              {clientToken && (
                <DropIn
                  options={{
                    authorization: clientToken,
                    paypal: {
                      flow: "vault",
                    },
                  }}
                  onInstance={(instance) => setInstance(instance)}
                />
              )}
              <button className="cart-products-coupon-input-button" onClick={handlePayement} >
                {loading ? "Processing" : "Make Payement"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-image-container">
          <img src={cartImg} className="cart-image" />
          <h1 className="cart-heading">Oops! Your cart is empty</h1>
          <button className="cart-button" onClick={() => navigate("/shop")}>
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
