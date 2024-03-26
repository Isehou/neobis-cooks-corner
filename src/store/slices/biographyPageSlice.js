import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MAIN_API, MY_PAGE_API } from "../../services/endpoints";

export const getBiographyPage = createAsyncThunk(
  "mypage/getBiographyPage",
  async (_, thunkAPI) => {
    try {
      const authToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${MAIN_API}${MY_PAGE_API}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      if (response.status !== 200) {
        throw new Error("Failed to update biography page");
      }
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  biography: [],
  loading: false,
  error: null,
  success: false,
};

const biographyPageSlice = createSlice({
  name: "mypage",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBiographyPage.pending, (state) => {
        state.biography = [];
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getBiographyPage.fulfilled, (state, action) => {
        state.biography = action.payload;
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(getBiographyPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const biographyPageReducer = biographyPageSlice.reducer;
