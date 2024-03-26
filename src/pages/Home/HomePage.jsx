import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../store/slices/allRecipesSlice";
import { Link } from "react-router-dom";
import "./home-page.css";

function HomePage() {
  const [filter, setFilter] = useState("Breakfast");
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.allRecipes.recipes);
  const { loading, error, success } = useSelector((state) => state.allRecipes);

  const mealsCategory = [
    ["BREAKFAST", "Breakfast"],
    ["LUNCH", "Lunch"],
    ["DINNER", "Dinner"],
  ];

  const applyFilter = (newFilter) => {
    setFilter(newFilter);
    dispatch(getAllRecipes(newFilter));
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  // решить вопрос с получением пустого массива

  return (
    <div className="out-wrapper">
      <h2>Hi, Gordon Ramsay</h2>
      <div className="homepage">
        <h3>Category</h3>
        <div className="homepage-category-list">
          {mealsCategory.map(([key, value]) => (
            <button
              key={key}
              className={
                filter === key
                  ? "homepage-category-item active"
                  : "homepage-category-item"
              }
              onClick={() => applyFilter(key)}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="homepage-meal__content">
          {recipes.map((recipe) => (
            <Link key={recipe.id}>
              <div className="meal-item">
                <div className="meal-img__wrapper">
                  <img className="meal-img" src={recipe.image} alt="" />
                  <div className="dark-overlay"></div>
                </div>
                <div className="meal-title">{recipe.title}</div>
                {/* <div className="meal-author">{recipe.author}</div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
