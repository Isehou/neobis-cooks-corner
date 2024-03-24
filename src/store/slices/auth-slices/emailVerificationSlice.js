import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MAIN_API, EMAIL_VERIFY } from "../../../services/endpoints";

export const verifyEmail = createAsyncThunk(
  "emailVerification/verifyEmail",
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(`${MAIN_API}${EMAIL_VERIFY}`, {
        email,
      });

      if (response.status !== 200) {
        throw new Error("Failed to verify email");
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const emailVerificationSlice = createSlice({
  name: "emailVerification",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const emailVerificationReduce = emailVerificationSlice.reducer;
