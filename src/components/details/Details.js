import React from "react";
import './Details.scss'
import { useState } from "react";
import { useParams  } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
//import ReactPlayer from 'react-player';



export default function Details() {
  const [ open , setOpen ] = useState(false)
  const [ item , setItem ] = useState([])
  const [trailer, setTrailer] = useState(null);
  const { id } = useParams();   
  
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=40c5472500254014bc0441252e3b37ac&language=en-US&append_to_response=videos,similar,credits`)
   .then(response => response.json())
   .then(data => {
     setItem(data) 
     
     const trailerid = data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailerid ? trailerid : data.videos.results[0]);
     } )
      


  return (
    <>

         {
              (!item) ? `404 NOT FOUND ${id}` : (
                    <div className='detail_trailer_cont'>
                        <div key={item.id} className='detail'> 

                           <img className='detail_image_bkg' src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} alt="..." />
        
                             <div className="detail_shadow">
                             
                                <div className="container  detail_body_cont">
                                    <div className='  detail_body'>
                                         <div className='detail_image_cont'>
                                             <img className='detail_image' src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt="..." />
                                          </div>
                                     
                                           <div className='detail_info'>
                                                <div className='detail_title_cont'> 
                                                    <h3 className="detail_title">{item.original_title}</h3>
                                                    <div className='detail_star_cont'>
                                                          {item.vote_average}
                                                          <FaStar className='detail_star'/>
                                                    </div>
                                                 </div>
                                                
                                                
                                                <p className="detail_overview">{item.overview}</p>
                                                <div>
                                                   <span>Genre:</span>
                                                {item.genres &&
                                                     item.genres.slice(0, 3).map((genre, i) => (
                                                        <span className='detail_genre' key={i}>
                                                          {genre.name}
                                                        </span>
                                                      ))}
                                                </div>

                                             <button onClick={() => setOpen(true)} className='detail_play_btn'>PLAY TRAILER</button>
                                         </div>    
                 
                                     </div>     
                                 </div> 
                           </div>  
                        </div>
                        
                          {open && (
                                 <div className='detail_video_cont'>
                                    <div className='iframe_cont'>
                                       <button className='detail_close_btn' onClick={() => setOpen(false)}>Close</button>  
                                          <iframe 
                                             src={`https://www.youtube.com/embed/${trailer.key}`}  
                                             title='trailer'
                                              className='detail_video'
                                            >
                                            </iframe>  
                                        </div>     
                                     </div>   
                          )}
                        
                  </div>      
                )
            }

    </>  
    )
}