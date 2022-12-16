import React from "react";
import  { useNavigate } from "react-router-dom";

export default function Recipe({recipe}) {
  const {id, original_title, release_date, backdrop_path, path } = recipe
  let navigate = useNavigate();
  return (
      <> 

           <div className="card" key={id} onClick={() => {navigate(`/${id}`)}}>
              <img src={"https://image.tmdb.org/t/p/w500" + backdrop_path} alt={path} />
            
             <div className="card-body">
                <p className="category">{release_date}</p>
                <h3 className="name">{original_title}</h3>
             </div>   
           </div>

      </>
      
    )
}