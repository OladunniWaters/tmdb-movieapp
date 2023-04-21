import React from "react";
import "./Thumbnail.scss";
import  { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

//import { LazyLoadImage } from 'react-lazy-load-image-component';
//import Card from '../placeholder/Card';
///import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Thumbnail({movie}) {
  const {id, poster_path, path, vote_average } = movie
  let navigate = useNavigate();
  return (
      <> 

           <div className="thumbnail" key={id} onClick={() => {navigate(`/${id}`)}}>
             <img className='thumbnail_image' src={"https://image.tmdb.org/t/p/w500" + poster_path} alt={path} />   
             <div className="">
                <div className="thumbnail_rating">
                    {vote_average}
                    <FaStar className='thumbnail_rating_star'/>
                </div>
             </div>   
           </div>

      </>
      
    )
}