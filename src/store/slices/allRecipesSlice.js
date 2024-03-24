import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MAIN_API, ALL_RECIPE_API } from "../../services/endpoints";

export const getAllRecipes = createAsyncThunk(
  "allRecipes/getAllRecipes",
  async (_, thunkAPI) => {
    try {
      const authToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${MAIN_API}${ALL_RECIPE_API}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      if (response.status !== 200) {
        throw new Error("Failed to get All Recipes");
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getAllRecipes.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(getAllRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const allRecipesReduce = allRecipesSlice.reducer;
