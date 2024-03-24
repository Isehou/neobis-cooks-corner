import { configureStore } from "@reduxjs/toolkit";

import { emailVerificationReduce } from "./slices/auth-slices/emailVerificationSlice";
import { loginReduce } from "./slices/auth-slices/loginSlice";
import { registerReduce } from "./slices/auth-slices/registerSlice";
import { allRecipesReduce } from "./slices/allRecipesSlice";
import { authMiddleware } from "./middlewares/authMiddleware";

export const store = configureStore({
  reducer: {
    emailVerification: emailVerificationReduce,
    login: loginReduce,
    register: registerReduce,
    allRecipes: allRecipesReduce,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});
