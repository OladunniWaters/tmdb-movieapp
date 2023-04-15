import React from "react";
import './Details.scss'
import { useState } from "react";
import { useParams  } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import  { useNavigate } from "react-router-dom";


export default function Details() {

  const [ item , setItem ] = useState([])
  const { id } = useParams();   
  
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=40c5472500254014bc0441252e3b37ac&language=en-US`)
   .then(response => response.json())
   .then(data => {
     setItem(data) 
    })

 let navigate = useNavigate();

  return (
    <>

         {
              (!item) ? `404 NOT FOUND ${id}` : (
                        <div key={item.id} className='detail'> 

                           <img className='detail_image_bkg' src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} alt="..." />
        
                             <div className="detail_shadow">
                             
                                <div className="container  detail_body_cont">
                                    <div className='detail_body'>
                                         <div className='detail_image_cont'>
                                          <img className='detail_image' src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt="..." />
                                          </div>
                                     
                                           <div className='detail_info'>
                                                <h3 className="detail_title">{item.original_title}</h3>
                                                <p className="detail_overview">{item.overview}</p>
                                                
                                                <div className='detail_btn_cont'>
                                                   <button onClick={() => {navigate(`/${id}`)}} className='detail_play_btn'>Play</button>
                                                   <div>
                                                      {item.vote_average}
                                                      <FaStar />
                                                  </div>
                                                </div>
                                          
                                          
                                        {/*        
                                                <p>
                                                 {item.release_date || item.first_air_date} •{" "}
                                                  {Math.floor(item.runtime / 60)}h {item.runtime % 60}m •{" "}
                                                  {item.genres.map((genre) => genre.name + " ")}{" "} • {item.vote_average}/10
                                                </p>
                                                
                                                <p>
                                                  {item.spoken_languages.map((spoken) => spoken.english_name + ", ")}
                                                </p>
                                                
                                                
                                                                                            <ReactPlayer
                                              url={`https://www.youtube.com/watch?v=${videos.key}`}
                                              controls
                                              width="400"
                                              height="360"
                                            />
                                             
                                         
                                                
                                         */}       
                                         
                                         </div>      
                                          
                                     </div>     
                                 </div> 
                           </div>  
                             
                        </div>
                )
            }

    </>  
    )
}