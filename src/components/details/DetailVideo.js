import React from "react";
import { useState } from "react";
import { useParams  } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube'


export default function DetailVideo() {

  const [ videos , setVideos ] = useState([])
  const { id } = useParams();   
  
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=40c5472500254014bc0441252e3b37ac&language=en-US`)
   .then(response => response.json())
   .then(data => {
     setVideos(data) 
    })


  return (
    <>

         {
              (!videos) ? `404 NOT FOUND ${id}` : (
                  
                  <div key={videos.id}> 
                  <p>Heyyyyyy{videos.name}</p>
                     <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${videos.key}`}
                        controls
                        width="400"
                        height="360"
                     />
                 </div>      
                )
            }

    </>  
    )
}