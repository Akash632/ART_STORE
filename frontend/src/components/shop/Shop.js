import React, { useState, useEffect, useContext } from "react";
import "./Shop.css";
import axios from "axios";
import ProductDetails from "../productDetails/ProductDetails";
import { useNavigate, useParams } from "react-router-dom";
import { disableScroll, enableScroll } from "../../functions/functions";
import { useAuth } from "../../context/auth";
import { UserContext } from "../../context/context";
import prices from '../../filters/price.js';
import ClipLoader from "react-spinners/ClipLoader";


function Shop() {
  const { navStatus, setNavStatus } = useContext(UserContext);
  const [shopItems, setShopItems] = useState();
  const [checked,setChecked] = useState([]);
  const[data,setData]= useState();
  const [radio,setRadio] = useState([]);
  const[filter,setFilter]=useState(false);
  const[index,setIndex]=useState(9);
  const[loading,setLoading]=useState(true);

  const navigate = useNavigate();
  const params = useParams();

  const [id, setId] = useState();
  const [categories,setCategories]=useState();

  const shopItemsLength = shopItems && shopItems.length;

  const [pageCount, setPageCount] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(shopItemsLength / pageCount);

  const myArray = shopItemsLength && [...Array(totalPages + 1).keys()].slice(1);

  const lastIndex = currentPage * pageCount;
  const firstIndex = lastIndex - pageCount;

  if (navStatus) {
    disableScroll();
  } else {
    enableScroll();
  }

  const getProducts = ()=>{
    axios
    .get("https://palette-tales.onrender.com/api/v1/products/getproducts")
    .then((response) => {
      setShopItems(response.data.products);
      console.log("shopItems",shopItems)
      setLoading(false);
    })
    .catch((err) => console.log(err));
  }

  const getCategories = ()=>{
    axios.get('https://palette-tales.onrender.com/api/v1/category/get-categories')
      .then((response)=>setCategories(response.data.categories))
      .catch((err)=>console.log(err));
  }
  useEffect(() => {
    getProducts();
    getCategories();
  }, [index]);

  useEffect(()=>{
    axios.post("http://localhost:5000/api/v1/products/getProductsByFilter",{checked,radio})
    .then((response)=>{
      setData(response.data.products)
      console.log("data",data);
    })
    .catch(err=>console.log(err));
  },[checked,radio])


  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [currentPage]);

  const handleCategories = (item,id)=>{
    let all=[...checked];
    if(item){
      all.push(id);
    }else{
      all=all.filter((c)=>c!==id);
    }
    setChecked(all);
  }

  const handleRadio = (e)=>{
  }

  console.log(radio);
  return (
    <div className={data?"shop-page-root-container":"shop-page-root-container-before"}>
      {data?( <div className="shop-page-main-container">
    <div className="shop-filter-main-container">
      <button className="shop-filter-btn" onClick={()=>setFilter(!filter)}>Filter</button>
      <div className={filter?"shop-filter-container shop-filter-container-active":"shop-filter-container"}>
      <div className="category-filter-container">
      <h1>Shop by Collection</h1>
        <div className="category-filter-main-container">
      {categories&&categories.map((item)=>(
        <div key={item._id} className="category-filter">
        <input type="checkbox" value={item._id} id="category-checkbox" onChange={(e)=>handleCategories(e.target.checked,e.target.value)}/>
        <label htmlFor="category-checkbox">{item.name}</label><br/>
        </div>
      ))}
      </div>
      </div>
      <div className="amount-filter-container">
        <h1>Shop by Amount</h1>
        <div className="amount-filter-main-container">
        {prices.map((item)=>(
        <div key={item._id} onChange={(e)=>setRadio([e.target.value])} className="amount-filter">
        <input type="radio" value={item.array} id="category-checkbox" name="radio"/>
        <label htmlFor="category-checkbox">{item.name}</label><br/>
        </div>
      ))}
        </div>
      
    </div>
      </div>
    </div>  
    <div className="shop-container-main">
      <div className="shop-container-bg">
        {data&&data.length>0?( data.slice(0,index).map((value)=>(<div
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
            </div>))):(shopItems&&shopItems.slice(0,index).map((value, index) => (
            <div
              className="shop-image-container-bg"
              key={index}
              onClick={() => navigate(`/shop/${value._id}`)}
            >
              <div className="shop-image-container">
                <img src={value.image_src} />
                {value.discount && (
                  <div className="shop-offer-container">
                    <span>{value.discount}</span>
                  </div>
                )}
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
          )))}
      </div>
      <div className="shop-card-pagination">
        <button onClick={()=>setIndex(index+9)} className="load-more-btn">Load more</button>
      </div>
      </div>
    </div>):<div className="cliploader"><ClipLoader color="#1b52a6" loading={loading} /></div>}
    </div>
  );
}

export default Shop;
