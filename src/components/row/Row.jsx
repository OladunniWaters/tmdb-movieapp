import React from "react";
import './Row.scss'
import { useRef, useState, useEffect } from "react";
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
    
        <Swiper
        navigation={true} 
        modules={[Navigation]} 


        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
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