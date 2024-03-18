import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DETAILS_MEAL } from "../../services/api";

export const fetchDetailsMeal = createAsyncThunk(
  "detailsMeal/fetchDetailsMeal",
  async () => {
    const response = await fetch(DETAILS_MEAL);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  meals: [
    {
      idMeal: "id",
      strMeal: "name",
      strCategory: "category",
      strArea: "nations",
      strInstructions: "description",
      strMealThumb: "images-links",
      strTags: "tags",
      strYoutube: "youtube-links",
      strIngredient: "ingredients",
    },
  ],
};

const detailsMealSlice = createSlice({
  name: "detailsMeal",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetailsMeal.fulfilled, (state, action) => {
      state.meals = action.payload.meals;
    });
  },
});

export const detailsMealReducer = detailsMealSlice.reducer;
