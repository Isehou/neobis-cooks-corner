import React from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import "./create-recipe.css";

function CreateRecipe({ createRecipeModalOpen, setCreateRecipeModalOpen }) {
  const handleClose = () => {
    setCreateRecipeModalOpen(false);
  };
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={
        createRecipeModalOpen ? "create-recipe active" : "create-recipe"
      }
      onClick={handleClose}
    >
      <div className="create-recipe-wrapper" onClick={handleContentClick}>
        <div className="create-recipe-title">
          <h2>Create recipe</h2>
          <span className="create-recipe__close-btn" onClick={handleClose}>
            <IoMdClose className="create-recipe__close-btn__icon" />
          </span>
        </div>
        <div className="create-recipe__input-item-wrapper">
          <span>Add a recipe photo</span>
          <input
            className="create-recipe-input create-recipe-upload-photo"
            type="file"
            id="myFile"
            name="uploadfile"
          />
          <label className="create-recipe-upload-photo__label" htmlFor="myFile">
            <MdOutlineAddAPhoto className="create-recipe-upload-photo__icon" />
            Upload a new photo
          </label>
        </div>
        <div className="create-recipe__input-block">
          <div className="create-recipe__input-item-wrapper">
            <span>Name your recipe</span>
            <input
              className="create-recipe-input create-recipe-name"
              type="text"
            />
          </div>

          <div className="create-recipe__input-item-wrapper">
            <span>Add a description</span>
            <input className="create-recipe-input " type="text" />
          </div>

          <div className="create-recipe__input-item-wrapper">
            <span>Add on ingredients</span>
            <div className="create-recipe__ingredients-block">
              <input
                className="create-recipe-input create-recipe__add-on-ingredients-input"
                type="text"
              />
              <input
                className="create-recipe-input create-recipe__weight-input"
                type="text"
              />
              <button className="add-on-ingredients-btn">
                <TiPlus className="add-on-ingredients-btn__icon" />
              </button>
            </div>
          </div>

          <div className="create-recipe__input-item-wrapper">
            <span>Difficulty</span>
            <div>
              <button className="create-recipe__difficulty-btn">Easy</button>
              <button className="create-recipe__difficulty-btn">Medium</button>
              <button className="create-recipe__difficulty-btn">Hard</button>
            </div>
          </div>

          <div className="create-recipe__input-item-wrapper">
            <span>Category of Meal</span>
            <input
              className="create-recipe-input "
              type="text"
              placeholder="Breakfast"
            />
          </div>

          <div className="create-recipe__input-item-wrapper">
            <span>Preparation time</span>
            <input
              className="create-recipe-input "
              type="text"
              placeholder="How much time does it need?(minutes)"
            />
          </div>
        </div>

        <button className="create-recipe__btn">Create a recipe</button>
      </div>
    </div>
  );
}

export default CreateRecipe;
