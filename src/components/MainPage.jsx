import React, { useState } from "react";
import Recipes from "./Recipes";
// import RecipeDetails from "./RecipeDetails";

const MainPage = () => {
  let errMsg = document.querySelector(".error-msg");
  const [recipeData, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const getData = async () => {
    // MealDB API
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    if (searchTerm == ""){
      return;
    }

    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error("Network response was not ok");

      const jsonData = await response.json();
      console.log(jsonData)

      if (!jsonData.meals) {
        throw new Error("No meals found");
      }

      setData(jsonData.meals || []);
      errMsg.innerText = "";
    } catch (error) {
      console.error("Error fetching data:", error);
      errMsg.innerText = "No Result Found";
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="heading text-center">
          <h1>Food Recipe App</h1>
        </div>
        <div className="searchBar d-flex justify-content-center align-items-center my-5">
          <input
            value={searchTerm}
            type="text"
            placeholder="Search For Recipe"
            onChange={handleSearchInput}
          />
          <button className="btn btn-danger" onClick={getData}>
            Search
          </button>
        </div>
        <div className="error-msg-box">
          <p className="error-msg"></p>
        </div>
        <div className="">
          <Recipes recipes={recipeData} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
