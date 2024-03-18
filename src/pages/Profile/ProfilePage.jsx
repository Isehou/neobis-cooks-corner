import React from "react";
import avatar from "../../assets/avatar.jpg";
import "./profile-page.css";
import SavedRecipeList from "../../components/recipe-list/SavedRecipeList";

function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>
      <div className="profile-page-wrapper">
        <div className="profile-account-information">
          <div className="profile-avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="profile-description">
            <div className="profile-subscription__container">
              <h4>
                29 <span>Recipe</span>
              </h4>
              <h4>
                144 <span>Followers</span>
              </h4>
              <h4>
                100 <span>Following</span>
              </h4>
            </div>
            <div className="profile-text">
              <h3>Gordon Ramsay</h3>
              <p>
                Gordon James Ramsay OBE is a British celebrity chef,
                restaurateur, television presenter, and writer. His restaurant
                group, Gordon Ramsay Restaurants, was founded in 1997 and has
                been awarded 17 Michelin stars overall and currently holds
                eight.
              </p>
            </div>
            <div className="profile-setting">
              <button className="profile-setting-btn">Profile Manage</button>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-saved-recipe-information">
        <div className="profile-saved-recipe-title">
          <span>My recipe</span>
          <h4>Saved recipe</h4>
        </div>
        <div className="profile-saved-recipe-recipes__container">
          <SavedRecipeList />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
