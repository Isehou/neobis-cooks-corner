import React from "react";
import { Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/Authorization/RegisterPage";
import LoginPage from "./pages/Authorization/LoginPage";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SearchPage from "./pages/Search/SearchPage";
import RecipeDetailsPage from "./pages/Home/RecipeDetailsPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/recipe-detail" element={<RecipeDetailsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      {/* <Route path={`/profile/:id`} element={<ProfilePage />} /> */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRouter;
