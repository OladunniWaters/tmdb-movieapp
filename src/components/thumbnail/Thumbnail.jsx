import React from "react";
import "./Thumbnail.scss";
import  { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa';




export default function Thumbnail({movie}) {
  const {id, original_title, backdrop_path, path, vote_average } = movie
  let navigate = useNavigate();
  return (
      <> 

           <div className="thumbnail" key={id} onClick={() => {navigate(`/${id}`)}}>
              <img className='thumbnail_image' src={"https://image.tmdb.org/t/p/w500" + backdrop_path} alt={path} />
            
             <div className="">
                <div className="thumbnail_rating">
                    {vote_average}
                    <FaStar className='thumbnail_rating_star'/>
                </div>
                <h3 className="thumbnail_title">{original_title}</h3>
             </div>   
           </div>

      </>
      
    )
}