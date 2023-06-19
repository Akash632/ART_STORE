import React, { useState,useEffect,useContext } from "react";
import "./Shop.css";
import axios from "axios";
import ProductDetails from "../productDetails/ProductDetails";
import { useNavigate , useParams} from "react-router-dom";
import { UserContext } from "../../context/context";
import { disableScroll,enableScroll } from "../../functions/functions";

function Shop() {
  const {navStatus,setNavStatus}=useContext(UserContext);

  if(navStatus){
    disableScroll()
  }else{
    enableScroll();
  }

  const [shopItems, setShopItems] = useState();

  const navigate = useNavigate();
  const params = useParams();

  const [id,setId] = useState();


  useEffect(()=>{
    axios.get('http://localhost:5000/shop')
    .then((response)=>setShopItems(response.data.products))
    // .then((response)=>console.log(response.data.products))
    .catch((err)=>console.log(err));
  },[]);

  const shopItemsLength = shopItems && shopItems.length;

  const [pageCount, setPageCount] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(shopItemsLength / pageCount);

  const myArray = shopItemsLength&&[...Array(totalPages + 1).keys()].slice(1);

  const lastIndex = currentPage * pageCount;
  const firstIndex = lastIndex - pageCount;

  useEffect(()=>{
    window.scrollTo(0,0)
  },[currentPage])

  return (
    <>
      <div className="shop-container-bg">
        {shopItems && shopItems.slice(firstIndex,lastIndex).map((value, index) => (
          <div className="shop-image-container-bg" key={index} onClick={()=>navigate(`/shop/${value._id}`)}>
            <div className="shop-image-container">
              <img src={value.image_src} />
              <div className="shop-offer-container">
                <span>{value.discount}</span>
              </div>
            </div>
            <div className="shop-card-text-container">
              <h1>{value.title}</h1>
              <div className="shop-card-price-container">
                <span className="shop-card-original-price">
                  {value.original_price}
                </span>
                <span className="shop-card-discount-price">
                  {value.discount_price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="shop-card-pagination">
        <div>
          {myArray&&myArray.map((page,index) => (
            <span
              onClick={() => setCurrentPage(page)}
              className="shop-card-pagination-numbers"
              key={index}
            >
              {page}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
