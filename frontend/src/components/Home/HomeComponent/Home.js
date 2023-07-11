import React, { useEffect, useState,useContext } from 'react';
import Category from '../categories/Category';
import LatestCollection from '../latestCollection/LatestCollection';
import CreativeCard from '../creativecards/CreativeCard';
import AboutCard from '../aboutus/AboutCard';
import Carousal from '../carousal/Carousal';
import { UserContext } from '../../../context/context';
import { disableScroll,enableScroll } from '../../../functions/functions';
import './Home.css';
// import Motion from '../../../animations/Motion';
import { motion } from "framer-motion";
// import { useAuth } from '../../../context/auth';


function Home() {

  const {navStatus,setNavStatus} = useContext(UserContext);

  console.log("nav",navStatus);
  if(navStatus){
    disableScroll();
  }else{
    enableScroll();
  }
//   function disableScroll() {
//     let scrollTop =
//      window.pageYOffset || document.documentElement.scrollTop;
//     let scrollLeft =
//      window.pageXOffset || document.documentElement.scrollLeft;
//          window.onscroll = function() {
//              window.scrollTo(scrollLeft, scrollTop);
//          };
//  }
   
//  function enableScroll() {
//      window.onscroll = function() {};
//  }
useEffect(()=>{
  window.scroll(0,0)
},[]);
  return (
    <motion.div       inital={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:5}}>
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
    <div className='home-container'>
      <Carousal/>
      <LatestCollection/>
      <Category/>
      <CreativeCard/>
      <AboutCard/>
    </div>
    </>
    </motion.div>
  );
}

export default Home;
