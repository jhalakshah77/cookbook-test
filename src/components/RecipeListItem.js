import React from "react";

const RecipeListItem = ({ recipe }) => {
  return (
    <>
      <img className="recipe-item-img" src={recipe.image} alt={recipe.name} />
    </>
  );
};

export default RecipeListItem;
