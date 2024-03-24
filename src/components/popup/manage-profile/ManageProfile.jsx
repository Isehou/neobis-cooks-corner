import React, { useEffect, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import "./manage-profile.css";

function ManageProfile({
  isManageProfileOpen,
  setIsManageProfileOpen,
  userName,
  userDescription,
  setUserName,
  setUserDescription,
}) {
  const [tempUserName, setTempUserName] = useState(userName);
  const [tempUserDescription, setTempUserDescription] =
    useState(userDescription);

  const handleUpload = () => {
    console.log("Upload logic here");
  };
  const handleClose = () => {
    setIsManageProfileOpen(false);
  };
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  const handleNameChange = (e) => {
    setTempUserName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTempUserDescription(e.target.value);
  };
  const handleSaveChanges = () => {
    setUserName(tempUserName);
    setUserDescription(tempUserDescription);
    localStorage.setItem("profileName", tempUserName);
    localStorage.setItem("profileDescription", tempUserDescription);
    setIsManageProfileOpen(false);
  };

  useEffect(() => {
    setTempUserName(userName);
    setTempUserDescription(userDescription);
  }, [userName, userDescription]);

  return (
    <div
      className={
        isManageProfileOpen ? "manage-profile active" : "manage-profile"
      }
      onClick={handleClose}
    >
      <div className="manage-profile-wrapper" onClick={handleContentClick}>
        <div className="manage-profile-title">
          <h2>Manage profile</h2>
          <span className="manage-profile__close-btn" onClick={handleClose}>
            <IoMdClose className="manage-profile__close-btn__icon" />
          </span>
        </div>
        <div className="manage-profile__input-block">
          <div className="manage-profile__input-item-wrapper">
            <span>Change your profile</span>
            <input
              className="profile-input profile-change"
              type="text"
              value={tempUserName}
              onChange={handleNameChange}
            />
          </div>

          <div className="manage-profile__input-item-wrapper">
            <span>Change your bio</span>
            <input
              className="profile-input profile-change-bio"
              type="text"
              value={tempUserDescription}
              onChange={handleDescriptionChange}
            />
          </div>

          <div className="manage-profile__input-item-wrapper">
            <span>Add a recipe photo</span>
            <input
              className="profile-input profile-upload-photo"
              type="file"
              id="myFile"
              name="uploadfile"
              onClick={handleUpload}
            />
            <label className="profile-upload-photo__label" htmlFor="myFile">
              <MdOutlineAddAPhoto className="profile-upload-photo__icon" />
              Upload a new photo
            </label>
          </div>
        </div>

        <button
          className="manage-profile__saved-changes-btn"
          onClick={handleSaveChanges}
        >
          Save changes
        </button>
      </div>
    </div>
  );
}

export default ManageProfile;
