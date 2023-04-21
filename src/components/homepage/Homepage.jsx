import React, {useState, useEffect} from "react";
import './Homepage.scss';
import Row from '../row/Row';
import Horror from '../row/Horror';
import Adventure from '../row/Adventure';
import Banner from '../banner/Banner';

import RowPL from '../placeholder/RowPL';
import BannerPL from '../placeholder/BannerPL';



export default function Homepage() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
     setTimeout(() => setLoading(false), 5000)  
  }, [])
  
  
  return (
   <> 
     
     { loading ? <BannerPL /> : <Banner />} 
     { loading ? <RowPL /> : <Row /> }
     { loading ? <RowPL /> : <Horror /> }
     { loading ? <RowPL /> : <Adventure /> }
   </>             
               
    )
}