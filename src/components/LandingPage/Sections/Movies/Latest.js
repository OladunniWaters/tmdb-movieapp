import './Latest.css';
import React, { useEffect, useState } from "react";
//import SectionsCard from "../../SectionsCard/SectionsCard";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons'


export default function Latest() {
//const apiKey = "40c5472500254014bc0441252e3b37ac" ;
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
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
       slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
       slidesToShow: 1,
      }
     }
  ]
  };

  return (
    <div className="latest">
       <h1 className="latestHeader">Latest Movies</h1>
  
  
      <Slider {...sliderSettings}>
            {popular.map((movie) => (
              <div key={movie.id}>
                <h2>{movie.original_title}</h2>
                  <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
                <p>{movie.overview }</p>
                <button className='btn'>Buy Now</button>
              </div>
            ))}
          </Slider>

{/*
  <div className="latest_cards">
               {popular.map((movie) => {
                 return (
                  <SectionsCard
                      key={movie.id}
                       movie={movie}
                  />
               );})}
          </div>
*/}
    
    </div>
  );
}