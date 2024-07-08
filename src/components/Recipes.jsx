import React, { useState } from "react";

const Recipes = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    const modal = new window.bootstrap.Modal(
      document.getElementById("recipeModal")
    );
    modal.show();
  };

  return (
    <div>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-item">
            <img className="img-fluid" src={recipe.strMealThumb} alt="" />
            <h3>{recipe.strMeal}</h3>
            <p>{recipe.strCategory}</p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleViewRecipe(recipe)}
            >
              View Recipe
            </button>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div
          className="modal fade"
          id="recipeModal"
          tabIndex="-1"
          aria-labelledby="recipeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="recipeModalLabel">
                  {selectedRecipe.strMeal}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  className="img-fluid mb-3"
                  src={selectedRecipe.strMealThumb}
                  alt=""
                />
                <p>
                  <b>Category: {selectedRecipe.strCategory}</b>
                </p>
                <h5>Ingredients:</h5>
                <ul>
                  {selectedRecipe.strIngredient1 && <li>{selectedRecipe.strIngredient1}</li>}
                  {selectedRecipe.strIngredient2 && <li>{selectedRecipe.strIngredient2}</li>}
                  {selectedRecipe.strIngredient3 && <li>{selectedRecipe.strIngredient3}</li>}
                  {selectedRecipe.strIngredient4 && <li>{selectedRecipe.strIngredient3}</li>}
                  {selectedRecipe.strIngredient5 && <li>{selectedRecipe.strIngredient3}</li>}
                  {selectedRecipe.strIngredient6 && <li>{selectedRecipe.strIngredient3}</li>}
                  {selectedRecipe.strIngredient7 && <li>{selectedRecipe.strIngredient3}</li>}
                  {selectedRecipe.strIngredient8 && <li>{selectedRecipe.strIngredient3}</li>}
                  {selectedRecipe.strIngredient9 && <li>{selectedRecipe.strIngredient3}</li>}
                  {selectedRecipe.strIngredient10 && <li>{selectedRecipe.strIngredient3}</li>}
                  {selectedRecipe.strIngredient11 && <li>{selectedRecipe.strIngredient3}</li>}
                  {selectedRecipe.strIngredient12 && <li>{selectedRecipe.strIngredient3}</li>}
                </ul>
                <h5>Instructions:</h5>
                <p>{selectedRecipe.strInstructions}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
