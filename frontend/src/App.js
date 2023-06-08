// import './App.css';
import react from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Category from './components/Home/categories/Category';
import CreativeCard from './components/Home/creativecards/CreativeCard';
import AboutCard from './components/Home/aboutus/AboutCard';
import LatestBlog from './components/Home/latestBlogs/LatestBlog';
import Footer from './components/footer/Footer';
import LatestCollection from './components/Home/latestCollection/LatestCollection';
import Home from './components/Home/HomeComponent/Home';
import Shop from './components/shop/Shop';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Comission from './components/comission/Comission';
import ProductDetails from './components/productDetails/ProductDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path ="/home" element={<Home/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/comissions" element={<Comission/>}/>
        <Route exact path="/:value/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
