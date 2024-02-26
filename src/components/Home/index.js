import {Redirect} from "react-router-dom"
 import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'


import 'swiper/css';
import 'swiper/css/pagination';

 

import { TfiMenuAlt } from "react-icons/tfi";

import Cookies from "js-cookie"

import "./index.css"

 
 
const Home = () => {
     const settings = {
          className: "slider variable-width",
          dots: true,
          infinite: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        };


     const renderHeader = () => (
          <div className="header">
               <div className="avatar-card">
                   <i className="fa-solid fa-user avatar-icon" ></i>
               </div>
               <button type="button" className="menu-btn">
                         <TfiMenuAlt className="menu-icon"/>  
               </button>              
          </div>
     )  

     const userName = Cookies.get("userName")

     console.log(userName)

     if(userName === undefined){
         return  <Redirect to ="/signup" />
     }
     
     return (
          <div className="home-page">
               {renderHeader()}
               <div className="body-card">
                    <h1 className="name-heading">Hi! {userName}</h1>
                    <div className="slider-container">
                         <Swiper
                              spaceBetween={30}
                              pagination={{
                                   clickable: true,
                              }}
                              modules={[Pagination]}
                              className="mySwiper"
                              >
                              <SwiperSlide className="carousal-card"></SwiperSlide>
                              <SwiperSlide className="carousal-card"> </SwiperSlide>
                              <SwiperSlide className="carousal-card"></SwiperSlide>
                              <SwiperSlide className="carousal-card"></SwiperSlide>
                         </Swiper>
                    </div>
                    <textarea cols={35} rows={10} className="card">

                    </textarea>
                    <p className="text">What do you want to learn today {userName}</p>
               </div>
          </div>
     )
       
}

export default Home