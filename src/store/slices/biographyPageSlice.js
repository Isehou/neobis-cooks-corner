import { createSlice } from "@reduxjs/toolkit";
import { MY_PAGE_API } from "../../services/endpoints";

export const biographyPage = createAsyncThunk(
  "mypage/biographyPage",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put(`${MAIN_API}${MY_PAGE_API}`, userData);

      if (response.status !== 200) {
        throw new Error("Failed to update biography page");
      }
      const data = response.data;
      console.log("Biography page updated successfully", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const biographyPageSlice = createSlice({
  name: "mypage",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(biographyPage.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(biographyPage.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(biographyPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default biographyPageSlice.reducer;
