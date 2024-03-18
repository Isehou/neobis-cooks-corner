import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ALL_MEAL } from "../../services/api";

export const fetchAllMeal = createAsyncThunk(
  "allMeal/fetchAllMeal",
  async () => {
    try {
      const response = await axios.get(ALL_MEAL);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  meals: [],
};

const allMealSlice = createSlice({
  name: "allMeal",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllMeal.fulfilled, (state, action) => {
      state.meals = action.payload;
    });
  },
});

export const allMealReducer = allMealSlice.reducer;
