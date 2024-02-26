import {Redirect} from "react-router-dom"
 import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation  } from 'swiper/modules';
import Cookies from "js-cookie"


import 'reactjs-popup/dist/index.css'


import 'swiper/css';
import 'swiper/css/pagination';

import Header from "../Header" 

import "./index.css"

 
 
const Home = () => {

     const userName = Cookies.get("userName")

     console.log(userName)

     if(userName === undefined){
         return  <Redirect to ="/signup" />
     }
     
     return (
          <div className="home-page">
               <Header/>
               <div className="body-card">
                    <div className="body-card-1">
                         <h1 className="name-heading">Hi! {userName}</h1>
                              <div className="slider-container">
                                   <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        }}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                        >
                                        <SwiperSlide className="carousal-card">
                                             <img className="swiper-img" src="https://res.cloudinary.com/dyvuuyt4s/image/upload/f_auto,q_auto/ochfxizktgayigkaea5n" alt = "image" />
                                        </SwiperSlide>
                                        <SwiperSlide className="carousal-card"> 
                                             <img className="swiper-img" src = "https://res.cloudinary.com/dyvuuyt4s/image/upload/f_auto,q_auto/nkx1x8tzkjxgax7jlhcm" alt = "image" />
                                        </SwiperSlide>
                                        <SwiperSlide className="carousal-card">
                                             <img className="swiper-img" src = "https://res.cloudinary.com/dyvuuyt4s/image/upload/f_auto,q_auto/qyt2dekxpa46db2rpeqd" alt = "image" />
                                        </SwiperSlide>
                                        <SwiperSlide className="carousal-card">
                                             <img className="swiper-img" src = "https://res.cloudinary.com/dyvuuyt4s/image/upload/f_auto,q_auto/x5jg2pzz7fdsybnljcvc" alt = "image" />
                                        </SwiperSlide>
                                        <SwiperSlide className="carousal-card">
                                             <img className="swiper-img" src = "https://res.cloudinary.com/dyvuuyt4s/image/upload/f_auto,q_auto/gwn3azhtliwogkpfjoud" alt = "image" />
                                        </SwiperSlide>
                                   </Swiper>
                              </div>
                    </div>
                    <div className="body-card-2">
                         <textarea cols={35} rows={10} className="text-card">
                         </textarea>
                         <p className="text">What do you want to learn today {userName}</p>
                    </div>
               </div>
          </div>
     )
       
}

export default Home