import React, { useState, useEffect} from "react";
import './Homepage.scss';
import Row from '../row/Row';
import Horror from '../row/Horror';
import Adventure from '../row/Adventure';
import Banner from '../banner/Banner';


export default function Homepage() {
  return (
   <> 
      <Banner />
      <Row /> 
      <Horror /> 
      <Adventure /> 
   </>             
               
    )
}