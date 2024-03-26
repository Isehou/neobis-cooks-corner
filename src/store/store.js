import { configureStore } from "@reduxjs/toolkit";

import { emailVerificationReduce } from "./slices/auth-slices/emailVerificationSlice";
import { loginReduce } from "./slices/auth-slices/loginSlice";
import { registerReduce } from "./slices/auth-slices/registerSlice";
import { allRecipesReducer } from "./slices/allRecipesSlice";
import { authMiddleware } from "./middlewares/authMiddleware";
import { biographyPageReducer } from "./slices/biographyPageSlice";

export const store = configureStore({
  reducer: {
    emailVerification: emailVerificationReduce,
    login: loginReduce,
    register: registerReduce,
    allRecipes: allRecipesReducer,
    mypage: biographyPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});
