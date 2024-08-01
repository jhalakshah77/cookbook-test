import React from "react";
import "./RecipeList.css";

const RecipeList = ({ recipes, handleRecipeClick }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul className="recipe-list-ul">
        {recipes.map((recipe) => (
          <li
            className="recipe-list-li"
            onClick={() => handleRecipeClick(recipe)}
          >
            <img
              className="recipe-item-img"
              src={recipe.image}
              alt={recipe.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
