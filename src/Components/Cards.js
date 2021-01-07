import React, { useState, useEffect } from "react";
import Card from "./Card";

function Cards() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const APP_ID = "978a9de6";
  const APP_KEY = "5246d97d7117ccc8914af900bb9ef325";

  const egReq = `https://api.edamam.com/search?q=dessert&app_id=${APP_ID}&app_key=${APP_KEY}&to=30`;

  const getRecipes = async () => {
    const response = await fetch(egReq);
    const data = await response.json();
    setRecipes(data.hits);
    // setIngredients(data.hits.recipe.ingredients);
    console.log("RECIPErS", recipes);

    // recipes.map((recipe, i) => {
    //   setIngredients((ingredients) => {
    //     ingredients.push(recipe.recipe.ingredients);
    //     return ingredients;
    //   });
    // });

    // console.log("ingredients", ingredients);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <div className="flex w-4/5 mx-auto justify-center flex-wrap">
        {recipes.map((recipe, i) => {
          return (
            <Card
              title={recipe.recipe.label}
              img={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
