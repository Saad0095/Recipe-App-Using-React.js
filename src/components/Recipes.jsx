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
          <div key={recipe.id} className="recipe-item">
            <img className="img-fluid" src={recipe.thumbnail} alt="" />
            <h3>{recipe.name}</h3>
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
                  {selectedRecipe.name}
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
                  src={selectedRecipe.thumbnail}
                  alt=""
                />
                <p>{selectedRecipe.description}</p>
                <h5>Ingredients:</h5>
                <p>
                  {selectedRecipe.ingredients.map((ingredient)=>(
                  <li>{ingredient}</li>
                ))}
                </p>
                <h5>Instructions:</h5>
                <p>{selectedRecipe.instructions}</p>
                <p><b>Cooking Time: </b>{selectedRecipe.cookingTime} min</p>
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
