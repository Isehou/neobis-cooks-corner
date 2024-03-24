import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MAIN_API, LOGIN_API } from "../../../services/endpoints";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${MAIN_API}${LOGIN_API}`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        throw new Error("Failed to register");
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const initialState = {
  loading: false,
  error: null,
  success: false,
  isAuth: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { logout } = loginSlice.actions;
export const loginReduce = loginSlice.reducer;
