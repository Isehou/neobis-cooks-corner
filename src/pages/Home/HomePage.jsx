import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../store/slices/allRecipesSlice";
import "./home-page.css";

function HomePage() {
  const dispatch = useDispatch();
  // const recipes = useSelector((state) => state.allRecipes);
  // const recipes = useSelector((state) => state.allRecipesReduce.recipes);
  // const loading = useSelector((state) => state.allRecipesReduce.loading);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <div className="out-wrapper">
      <h2>Hi, Gordon Ramsay</h2>
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
      <div className="homepage">
        <h3>Category</h3>
        <ul className="homepage-category-list">
          <li className="homepage-category-item">Breakfast</li>
          <li className="homepage-category-item">Lunch</li>
          <li className="homepage-category-item">Dinner</li>
        </ul>
        <div className="homepage-meal__content">
          <ul>
            {/* {recipes.map((recipe) => (
              <li key={recipe.id}>{recipe.name}</li>
            ))} */}
          </ul>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default HomePage;
