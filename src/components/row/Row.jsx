import React from "react";
import './Row.scss'
import { useState, useEffect } from "react";
import Thumbnail from "../thumbnail/Thumbnail";

import  { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";




const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=40c5472500254014bc0441252e3b37ac&language=en-US&page=1";

export default function Row() {
  
 //RECIPE FUNCTION
  const [movies, setMovies] = useState([]);
 
  const fetchMovie = async () => {
    const url = apiUrl 
    const response = await fetch(url)
    const data = await response.json();
    setMovies(data.results);
  }
  
  useEffect(() => {
    fetchMovie();
  }, [])
  

  
  return (
    
    <>
      <div className='container'>
        <span>POPULAR</span>
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
                   {movies.map(movie => (
                   <SwiperSlide key={movie.id} >
                       <Thumbnail
                          movie={movie}
                       />
                    </SwiperSlide>    
                   ))}
                 
               
      </Swiper> 
      
   </div>   
      
   </>            
               
    )
}