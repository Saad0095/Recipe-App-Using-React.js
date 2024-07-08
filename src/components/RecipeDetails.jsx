// src/components/RecipeDetails.js
import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{recipe.instructions}</p>
      <p>Cooking time: {recipe.cookingTime} minutes</p>
    </div>
  );
};

export default RecipeDetails;
