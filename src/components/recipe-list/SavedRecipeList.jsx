import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMeal } from "../../store/temp-slices/allMealSlice";

function SavedRecipeList() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.allMeal);

  useEffect(() => {
    dispatch(fetchAllMeal());
  }, [dispatch]);
  console.log(meals);

  return (
    <div className="saved-recipe">
      {Array.isArray(meals) &&
        meals.map((elem) => (
          <div key={elem.idCategory}>
            <div className="recipe__item-img__wrapper">
              <img
                src={elem.strCategoryThumb}
                alt="image"
                className="recipe__item-img"
              />
            </div>
            <div className="recipe__item-info">
              <h3 className="recipe__item-title">{elem.strCategory}</h3>
              <p className="recipe__item-description"></p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SavedRecipeList;
