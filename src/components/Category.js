import React from "react";
import { useState, useEffect} from "react";
import Recipe from "./Recipe";
import Navbar from "./Navbar"




const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

export default function Category() {
  
 //RECIPE FUNCTION

  const [recipes, setRecipes] = useState([]);
  
  
  const fetchRecipe = async () => {
    const url = apiUrl
    const response = await fetch(url)
    const data = await response.json();
    setRecipes(data.meals);
  }
  
  useEffect(() => {
    fetchRecipe();
  }, [])
  

  //filter by category 
        const [category, setCategory] = useState(recipes)
        const filterResult = (catItem) =>{
        const result = recipes.filter((curDate) =>{
          return curDate.strCategory === catItem;
        });
        setCategory(result)
      }
  
  
  return (
      <> 
      
        <Navbar />
         
          <div>
           <button onClick= {() => filterResult("Beef")}>BEEF</button>
           <button onClick= {() => filterResult("Seafood")}>Seafood</button>
           <button onClick= {() => filterResult("skincare")}>skincare</button>
           <button onClick={() => setCategory(recipes)}>All</button>
          </div>
    
  
              <h1>Filter by category</h1>
              <div className="recipe-container">
                  <div className="recipes">
                   {category.map(recipe => (
                       <Recipe
                          key={recipe.idMeal}
                          recipe={recipe}
                          
                       />
                   ))}
                   </div>
             </div>
          
          
         
         
      </>
    )
}