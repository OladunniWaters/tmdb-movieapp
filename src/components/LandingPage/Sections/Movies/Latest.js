//import './latest.css';
import React, { useEffect, useState } from "react";
import SectionsCard from "../../SectionsCard/SectionsCard";


export default function Latest() {
//const apiKey = "40c5472500254014bc0441252e3b37ac" ;
const latestUrl = "https://api.themoviedb.org/3/movie/latest?api_key=40c5472500254014bc0441252e3b37ac&language=en-US";

const [popular, setPopular ] = useState([]);

const fetchLatest = async () => {
  const data = await fetch(latestUrl);
  const movies = await data.json();
  setPopular(movies.results)
};

useEffect(() => {
  fetchLatest()
}, []);

  return (
    <div className="latest">
            <h1 className="latestHeader">Latest Movies</h1>
         
         <div className="latest_cards">
               {popular.map((movie) => {
                 return (
                  <SectionsCard 
                      key={movie.id}
                       movie={movie}
                  />
               );})}
          </div>
    </div>
  );
}