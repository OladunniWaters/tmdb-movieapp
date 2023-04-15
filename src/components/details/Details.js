import React from "react";
import './Details.scss'
import { useState } from "react";
import { useParams  } from "react-router-dom";
import { FaStar } from 'react-icons/fa';
import ReactPlayer from 'react-player';



export default function Details() {

  const [ item , setItem ] = useState([])
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
      
    
    
    
  const [ open , setOpen ] = useState(false)

  const videoDisplay = () => {
        setOpen(true);
    };
    
    
     const [trailer, setTrailer] = useState(null); 
    


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
                                                   <button onClick={videoDisplay} className='detail_play_btn'>PLAY</button>
                                                   
                                                     {open && (

                                                                
                                                          <iframe src={`https://www.youtube.com/embed/${trailer.key}`} width={500} height={300} title='A youtube video on React hooks'></iframe>      
                                                                                                        
                                                        )}
                                                   
                                                   
                                                   
                                                   <div>
                                                      {item.vote_average}
                                                      <FaStar />
                                                  </div>
                                                </div>
                                         
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