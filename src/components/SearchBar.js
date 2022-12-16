import React from "react";

export default function SearchBar({ handleSubmit, value, onChange }) {
  
  return (
      <>
      
        <form onSubmit={handleSubmit}>
            <input
               value={value}
               onChange={onChange}
               placeholder="Search Delicious Recipes"
               className="search-bar"
            />
            
            <input 
               type="submit"
               value="Search"
               className="btn"
            />
        </form>
      </>
    )
}