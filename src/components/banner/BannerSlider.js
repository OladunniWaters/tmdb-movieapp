import React from "react";
import "./BannerSlider.scss";
import  { useNavigate } from "react-router-dom";
import { FaPlay } from 'react-icons/fa';




export default function BannerSlider({banner}) {
  const {id, original_title, backdrop_path, path, overview  } = banner
  let navigate = useNavigate();
  return (
      <> 

           <div className="banner" key={id} onClick={() => {navigate(`/${id}`)}}>
              <img className='banner_image' src={"https://image.tmdb.org/t/p/w500" + backdrop_path} alt={path} />
            
             <div className="banner_shadow">
             
             <div className="banner_body">
                <h3 className="banner_title">{original_title}</h3>
                <p className="banner_overview">{overview.slice(0, 150)}..</p>
                
                <div className='banner_btn_cont'>
                   <button className='banner_play_btn'><FaPlay className='banner_play_icon'/>Play</button>
                   <button className='banner_info_btn'>More Information</button>
                </div>
                
             </div> 
             </div> 
             

  
           </div>

      </>
      
    )
}