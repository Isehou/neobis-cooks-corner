import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/Authorization/SignUpPage";
import SignInPage from "./pages/Authorization/SignInPage";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import SearchPage from "./pages/Search/SearchPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
    </Routes>
  );
}

export default AppRouter;
