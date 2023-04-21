import React from "react";
import './Card.scss';

export default function BannerCard({ban}) {
const {id} = ban


  return (
<div class="card banner_cont" aria-hidden="true" key={id}>
        <div class=" placeholder-glow">
          <span class="placeholder banner_card_img"></span>
      </div>            
   </div>                
    )
}