import React from "react";
import './Card.scss';

export default function Card({fake}) {
const {id} = fake


  return (
<div class="card card_cont" aria-hidden="true" key={id}>
        <div class=" placeholder-glow">
          <span class="placeholder card_img"></span>
      </div>            
   </div>                
    )
}