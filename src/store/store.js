import { configureStore } from "@reduxjs/toolkit";
import { allMealReducer } from "./temp-slices/allMealSlice";
import { detailsMealReducer } from "./temp-slices/detailsMealSlice";

export const store = configureStore({
  reducer: {
    allMeal: allMealReducer,
    detailsMeal: detailsMealReducer,
  },
});
