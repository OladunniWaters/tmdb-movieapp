import React from "react";
import './Homepage.scss'
import Row from '../row/Row'
import Banner from '../banner/Banner'

import { useCallback , useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { addMovie } from "../../store/movieSlice";


export default function Homepage() {
  
    const dispatch = useDispatch();
     const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=40c5472500254014bc0441252e3b37ac&language=en-US&page=1";
     const  fetchProduct = useCallback(async () => {
       const url = apiUrl
       const response = await fetch(url)
       const data = await response.json()
        dispatch(addMovie(data));
    }, [apiUrl, dispatch]);

     useEffect(() => {
      fetchProduct();
    }, [fetchProduct])
  
  
  return (
   <> 
     <Banner />
     <Row />
   </>             
               
    )
}