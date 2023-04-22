import React from "react";
import BannerCard from "./BannerCard";
import FakeData from '../placeholder/FakeData'

import  {  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";



export default function Banner() {

  return (
    
    <>
      <div className=''>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          > 
                               {FakeData.map(ban => (
                                 <SwiperSlide key={ban.id} >
                                     <BannerCard 
                                        ban={ban}
                                     />
                                  </SwiperSlide>    
                                 ))}
          
         </Swiper>
       </div>   
   </>            
               
    )
}