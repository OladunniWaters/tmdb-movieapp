import React from "react";
import Card from "../placeholder/Card";
import FakeData from '../placeholder/FakeData'

import  { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";



export default function RowPL() {
  
  
  return (
    
    <>
      <div className='container'>
        <Swiper
        navigation={true} 
        modules={[Navigation]} 


        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          577: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1025: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}>
                   {FakeData.map(fake => (
                   <SwiperSlide key={fake.id} >
                       <Card
                          fake={fake}
                       />
                    </SwiperSlide>    
                   ))}
                 
               
      </Swiper> 
      
   </div>   
      
   </>            
               
    )
}