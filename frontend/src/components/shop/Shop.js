import React, { useState,useEffect } from "react";
import "./Shop.css";
import axios from "axios";
import ProductDetails from "../productDetails/ProductDetails";
import { useNavigate , useParams} from "react-router-dom";

function Shop() {

  const [shopItems, setShopItems] = useState();

  const navigate = useNavigate();
  const params = useParams();

  const [id,setId] = useState();

  console.log(params);
  // const shopItems = [
  //   {
  //     title: "Fly On Sky",
  //     original_price: "Rs.6,300",
  //     discount_price: "Rs.5,630",
  //     discount: "10% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/26.gif?v=1676008236&width=360",
  //   },
  //   {
  //     title: "Women Art",
  //     original_price: "Rs.5,200",
  //     discount_price: "Rs.3,900",
  //     discount: "25% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/24.gif?v=1676008196&width=360",
  //   },
  //   {
  //     title: "Border Mahal Srt",
  //     original_price: "Rs.6,800",
  //     discount_price: "Rs.6,600",
  //     discount: "2% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/22.gif?v=1676008151&width=360",
  //   },
  //   {
  //     title: "Flower Set",
  //     original_price: "Rs.9,200",
  //     discount_price: "Rs.8,900",
  //     discount: "3% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/21.gif?v=1676007924&width=360",
  //   },
  //   {
  //     title: "Fly Parrot",
  //     original_price: "Rs.1,800",
  //     discount_price: "Rs.1,500",
  //     discount: "16% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/20.gif?v=1676007822&width=360",
  //   },
  //   {
  //     title: "Jasmin Flower Art",
  //     original_price: "Rs.4,200",
  //     discount_price: "Rs.3,800",
  //     discount: "9% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/19.gif?v=1676007748&width=360",
  //   },
  //   {
  //     title: "Animal Stay Art",
  //     original_price: "Rs.7,800",
  //     discount_price: "Rs.7,100",
  //     discount: "8% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/18.gif?v=1676007699&width=360",
  //   },
  //   {
  //     title: "Sunshine Art",
  //     original_price: "Rs.8,200",
  //     discount_price: "Rs.7,800",
  //     discount: "4% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/17.gif?v=1676007533&width=360",
  //   },
  //   {
  //     title: "Amazing Art",
  //     original_price: "Rs.12,000",
  //     discount_price: "Rs.9,870",
  //     discount: "17% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/26.gif?v=1676008236&width=360",
  //   },
  //   {
  //     title: "Seashore Art",
  //     original_price: "Rs.9,000",
  //     discount_price: "Rs.8,800",
  //     discount: "2% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/24.gif?v=1676008196&width=360",
  //   },
  //   {
  //     title: "Classic Door",
  //     original_price: "Rs.3,700",
  //     discount_price: "Rs.3,522",
  //     discount: "4% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/12.gif?v=1676007161",
  //   },
  //   {
  //     title: "Sun Flower",
  //     original_price: "Rs.2,400",
  //     discount_price: "Rs.1,930",
  //     discount: "5% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/10.gif?v=1676007068",
  //   },
  //   {
  //     title: "Jungle Art",
  //     original_price: "Rs.3,700",
  //     discount_price: "Rs.3,522",
  //     discount: "19% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/01_a32ab651-5427-4f40-ad0f-e95182c446a7.gif?v=1676007120",
  //   },
  //   {
  //     title: "Nature Brush",
  //     original_price: "Rs.2,100",
  //     discount_price: "Rs.1,870",
  //     offer: "20% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/09.gif?v=1676005190",
  //   },
  //   {
  //     title: "Village Art",
  //     original_price: "Rs.4,500",
  //     discount_price: "Rs.4,200",
  //     discount: "6% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/06_932ef15e-58ce-4f26-bf8f-557061737de2.gif?v=1676004821",
  //   },
  //   {
  //     title: "Urban Look Art",
  //     original_price: "Rs.4,500",
  //     discount_price: "Rs.3,600",
  //     discount: "20% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/07_5b7360ca-ead3-4cb0-b537-e6d2a86eee07.gif?v=1676004969",
  //   },
  //   {
  //     title: "Fine Color Art",
  //     original_price: "Rs.2,200",
  //     discount_price: "Rs.1,820",
  //     discount: "6% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/08.gif?v=1676005079",
  //   },
  //   {
  //     title: "Village Look Art",
  //     original_price: "Rs.2,500",
  //     discount_price: "Rs.1,380",
  //     discount: "44% OFF",
  //     image_src:
  //       "https://cdn.shopify.com/s/files/1/0716/7367/6072/products/07_5b7360ca-ead3-4cb0-b537-e6d2a86eee07.gif?v=1676004969",
  //   },
  // ];

  // const pageNavigate = (id) =>{
  //   navigate(`/shop/${id}`);
  // }

  console.log(id);

  useEffect(()=>{
    axios.get('http://localhost:5001/products')
    .then((response)=>setShopItems(response.data))
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
