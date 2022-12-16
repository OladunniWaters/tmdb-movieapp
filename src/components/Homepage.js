import React from "react";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";


const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=40c5472500254014bc0441252e3b37ac&language=en-US&page=1";

export default function Homepage() {
  
 //RECIPE FUNCTION
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
 
  
  const fetchRecipe = async () => {
    const url = apiUrl 
    const response = await fetch(url)
    const data = await response.json();
    setRecipes(data.results);
  }
  
  useEffect(() => {
    fetchRecipe();
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipe();
  }
  
  
  return (
      <> 
      
        <Navbar />
     
         <SearchBar
            value={query}
            handleSubmit={handleSubmit}
            onChange={e => setQuery(e.target.value)}
         />
    

              <h1>RECIPES</h1>
              <div className="recipe-container">
                  <div className="recipes">
                   {recipes ? recipes.map(recipe => (
                       <Recipe
                          recipe={recipe}
                          key={recipe.id} 
                       />
                   )): "No Recipes Found!"}
                   </div>
             </div>
    
      </>
    )
}