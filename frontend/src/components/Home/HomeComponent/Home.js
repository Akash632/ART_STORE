import React, { useEffect, useState } from 'react';
import Category from '../categories/Category';
import LatestCollection from '../latestCollection/LatestCollection';
import CreativeCard from '../creativecards/CreativeCard';
import AboutCard from '../aboutus/AboutCard';
import LatestBlog from '../latestBlogs/LatestBlog';
import Carousal from '../carousal/Carousal';
import './Home.css';

function Home() {

  // const [model,setModel] = useState(false);

  // const toggleModel = () =>{
  //   setModel(!model);
  // }
  // if (model) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }
  return (
    <>
    {/* <button onClick={toggleModel}>
      Open
    </button>

    {
      model && (
        <div className='model'>
          <div className='overlay'>
            <div className='modal-content'>
            <h1>Model</h1>
            <p>Hello this is model</p>
            </div>
            <button onClick={toggleModel} className='close-modal'>Close</button>
          </div>
        </div>
      )
    } */}
      <Carousal/>
      <LatestCollection/>
      <Category/>
      <CreativeCard/>
      <AboutCard/>
      <LatestBlog/>
    </>
  );
}

export default Home;
