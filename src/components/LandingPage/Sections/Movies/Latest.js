import './Latest.css';
import React, { useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
//import {FaChevronLeft, FaChevronRight} from 'react-icons'


export default function Latest() {
  
const latestUrl = "https://api.themoviedb.org/3/movie/popular?api_key=40c5472500254014bc0441252e3b37ac&language=en-US&page=1";

const [popular, setPopular ] = useState([]);


const fetchLatest = async () => {
  const data = await fetch(latestUrl);
  const movies = await data.json();
  setPopular(movies.results)
};

useEffect(() => {
  fetchLatest()
}, []);

  const sliderSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="latest">
       <h1 className="latestHeader">Latest Movies</h1>
  
  
      <Slider {...sliderSettings}>
            {popular.map((movie) => (
              <div key={movie.id} className="card">
                 <div>
                      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />                 
                 </div>
                 <div>
                       <h2>{movie.original_title}</h2>
                       <p>{movie.vote_average}</p>
                       <p>{movie.release_date}</p> 
                 </div>

              </div>
            ))}
          </Slider>

    </div>
  );
}