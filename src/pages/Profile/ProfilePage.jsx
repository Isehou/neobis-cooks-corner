import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import ManageProfile from "../../components/popup/manage-profile/ManageProfile";
import { getBiographyPage } from "../../store/slices/biographyPageSlice";
import "./profile-page.css";
import "../main.css";

function ProfilePage() {
  const [isManageProfileOpen, setIsManageProfileOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userPhoto, setUserPhoto] = useState();

  const dispatch = useDispatch();
  const profileBiograph = useSelector((state) => state.mypage.biography);
  const { loading, error, success } = useSelector((state) => state.mypage);

  useEffect(() => {
    const savedName = localStorage.getItem("profileName");
    const savedDescription = localStorage.getItem("profileDescription");
    if (savedName) {
      setUserName(savedName);
    }
    if (savedDescription) {
      setUserDescription(savedDescription);
    }
  }, []);

  const handleUpdateBiography = () => {
    const userData = {
      username: userName,
      bio: userDescription,
      image: userPhoto,
    };
    dispatch(getBiographyPage(userData));
  };

  return (
    <div className="out-wrapper">
      <h2>Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
                <h3 className="profile-text__name">{userName}</h3>
                <p className="profile-text__description">{userDescription}</p>
              </div>
              <div className="profile-setting">
                <button
                  className="profile-setting-btn"
                  onClick={() => setIsManageProfileOpen(true)}
                >
                  Manage Profile
                </button>
                <ManageProfile
                  userName={userName}
                  setUserName={setUserName}
                  userDescription={userDescription}
                  setUserDescription={setUserDescription}
                  isManageProfileOpen={isManageProfileOpen}
                  setIsManageProfileOpen={setIsManageProfileOpen}
                  onUpdateBiography={handleUpdateBiography}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="profile-saved-recipe-information">
        <div className="profile-saved-recipe-title">
          <span>My recipe</span>
          <h4>Saved recipe</h4>
        </div>
        <div className="profile-saved-recipe-recipes__container">
          {profileBiograph.map((recipe) => (
            <Link key={recipe.id}>
              <div className="meal-item">
                <div className="meal-img__wrapper">
                  <img className="meal-img" src={recipe.image} alt="" />
                  <div className="dark-overlay"></div>
                </div>
                <div className="meal-title">{recipe.title}</div>
                {/* <div className="meal-author">{recipe.author}</div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
