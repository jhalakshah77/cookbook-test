import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h2 className="recipe-details-title">{recipe.name}</h2>
      <img
        className="recipe-details-img"
        src={recipe.image}
        alt={recipe.name}
      />
      <p className="recipe-details-desc" style={{ fontSize: "small" }}>
        {recipe.description}
      </p>
      <p className="recipe-details-desc" style={{ fontWeight: "600" }}>
        Author Name: {recipe.author}
      </p>
    </div>
  );
};

export default RecipeDetails;
