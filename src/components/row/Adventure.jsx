import React from "react";
import './Row.scss'
import { useState, useEffect } from "react";
import Thumbnail from "../thumbnail/Thumbnail";
import RowPL from '../placeholder/RowPL';

import  { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";




const apiUrl = "https://api.themoviedb.org/3/discover/movie?api_key=40c5472500254014bc0441252e3b37ac&language=en-US&page=1&with_genres=37";

export default function Adventure() {
  
   const [loading, setLoading] = useState(true)
   const [movies, setMovies] = useState([]);
 
  const fetchMovie = async () => {
    const url = apiUrl 
    const response = await fetch(url)
    const data = await response.json();
    setMovies(data.results);
  }
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 11000) 
    fetchMovie();
  }, [])
  

  
  return (
    
    <>
      <div className='container'>
        <span className='movie_header'>ADVENTURE</span>
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
                   {loading ? <RowPL/> :   movies.map(movie => (
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