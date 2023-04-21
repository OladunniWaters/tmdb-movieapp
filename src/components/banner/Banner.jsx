import React from "react";
import './Banner.scss';
import BannerSlider from "./BannerSlider";
import BannerPL from '../placeholder/BannerPL';

import {  useState, useEffect } from "react";
import  {  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=40c5472500254014bc0441252e3b37ac&language=en-US&page=1&with_genres=18";

export default function Banner() {
  
  const [loading, setLoading] = useState(true)
  const [banners, setBanners] = useState([]);
 
  const fetchBanner = async () => {
    const url = apiUrl 
    const response = await fetch(url)
    const data = await response.json();
    setBanners(data.results);
  }
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000) 
    fetchBanner();
  }, [])


  
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
                              {loading ? <BannerPL/> :  banners.map(banner => (
                                 <SwiperSlide key={banner.id} >
                                     <BannerSlider 
                                        banner={banner}
                                     />
                                  </SwiperSlide>    
                                 ))}
          
         </Swiper>
       </div>   
   </>            
               
    )
}