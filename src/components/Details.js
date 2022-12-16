import React from "react";
import { useState } from "react";
import { useParams  } from "react-router-dom";

export default function Details() {
  const [ item , setItem ] = useState([])
  const { id } = useParams();   
  
  
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=40c5472500254014bc0441252e3b37ac&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setItem(data.results[0])
    })

    
  return (
    <>

         {
              (!item) ? `404 NOT FOUND ${id}` : (
                        <div key={item.id}> 
                               <img src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} alt="..." />
                               <h1>Hey yo</h1>
                              <div className="">
                                <p className="">{item.homepage}</p>
                                <p className="">{item.title}</p>
                                <p className="">{item.tagline}</p>
                                <p className="">{item.overview}</p>
                             </div>   
                        </div>
                )
            }

    </>  
    )
}