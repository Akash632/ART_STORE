import React, { useState, useEffect, useContext } from "react";
import "../cart/Cart.css";
import cartImg from "../../assets/cartImg.png";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/context";
import axios from "axios";
import { toast } from "react-toastify";
import DropIn from "braintree-web-drop-in-react";

function Purchase() {
  const navigate = useNavigate();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const [data,setData]=useState();
  const params =useParams();


const getData=async()=>{
    const res = await axios.get(`https://palette-tales.onrender.com/api/v1/products/getProducts/${params.id}`);
    setData(res.data.details);
}

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
    console.log("payment block");
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      console.log("product data",data);
      await axios
        .post("https://palette-tales.onrender.com/api/v1/products/braintree/shopPayement", {
          nonce,
          data,
        })
        .then((res) => {
          if (res.data.ok) {
            setLoading(false);
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
    getData();
    getToken();
  }, []);

  return (
    <div className="cart-main-container">
      {data && (
        <div className="cart-page-main-container">
          <div className="cart-products-container">
                  <div className="cart-products-cards-container">
                    <div className="cart-products-details-card">
                      <div className="cart-products-img-container">
                        <img src={data.image_src} />
                      </div>
                      <div className="cart-products-text-container">
                        <h3>{data.title}</h3>
                        <p>Rs. {data.original_price}</p>
                        <p>Quantity: {data.quantity}</p>
                      </div>
                    </div>
                    <div className="cart-products-price-container">
                      <div>
                        <p>{data.quantity * data.original_price}</p>
                      </div>
                    </div>
                  </div>
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
                    {
                        data.original_price * data.quantity
                    }
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
                {data ? (
                  <h2>Rs. 
                    {
                        data.original_price * data.quantity + 80
                    }
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
      )}
    </div>
  );
}

export default Purchase;
