import React, { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import AboutUs from "./components/AboutUs/AboutUs";

/* const recipes = [
  {
    author: "Jim",
    name: "Paneer Curry",
    description:
      "Delicious spicy paneer curry.Delicious spicy paneer curry.Delicious spicy paneer curryDelicious spicy paneer curry.Delicious spicy paneer curry.Delicious spicy paneer curry.Delicious spicy paneer curry",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-curry-recipe.jpg",
  },
  {
    author: "Aravind",
    name: "Veg Burger",
    description: "Juicy burger with toppings and a soft bun",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Secret-Veg-Cheeseburgers-c981dd6.jpg",
  },
  {
    author: "Jim",
    name: "Paneer Curry",
    description: "Delicious spicy paneer curry",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-curry-recipe.jpg",
  },
  {
    author: "Aravind",
    name: "Veg Burger",
    description: "Juicy burger with toppings and a soft bun",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Secret-Veg-Cheeseburgers-c981dd6.jpg",
  },
  {
    author: "Jim",
    name: "Paneer Curry",
    description: "Delicious spicy paneer curry",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-curry-recipe.jpg",
  },
  {
    author: "Aravind",
    name: "Veg Burger",
    description: "Juicy burger with toppings and a soft bun",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Secret-Veg-Cheeseburgers-c981dd6.jpg",
  },
]; */

function App() {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([
    {
      author: "Jim",
      name: "Paneer Curry",
      description:
        "Delicious spicy paneer curry.Delicious spicy paneer curry.Delicious spicy paneer curryDelicious spicy paneer curry.Delicious spicy paneer curry.Delicious spicy paneer curry.Delicious spicy paneer curry",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-curry-recipe.jpg",
    },
    {
      author: "Aravind",
      name: "Veg Burger",
      description: "Juicy burger with toppings and a soft bun",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Secret-Veg-Cheeseburgers-c981dd6.jpg",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleRecipeClick = (recipe) => {
    setRecipe(recipe);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="App-details">
        <RecipeList recipes={recipes} handleRecipeClick={handleRecipeClick} />
        {recipe ? <RecipeDetails recipe={recipe} /> : <AboutUs />}
        {/* {recipe && <RecipeDetails recipe={recipe} />} */}
      </div>
    </div>
  );
}

export default App;
