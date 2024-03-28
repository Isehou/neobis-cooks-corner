import React, { useState } from "react";
import debounce from "lodash/debounce";
import "../main.css";
import "./search-page.css";
import { IoIosSearch } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import CreateRecipe from "../../components/popup/create-recipe/CreateRecipe";
import fetchSearchResult from "../../services/fetchSearchResult";

function SearchPage() {
  const [activeButton, setActiveButton] = useState("recipes");
  const [searchText, setSearchText] = useState("");
  const [createRecipeModalOpen, setCreateRecipeModalOpen] = useState(false);
  let timer;

  const handleButtonClick = (category) => {
    setActiveButton(category);
  };

  const handleSearchChange = async (event) => {
    const text = event.target.value;
    setSearchText(text);
    try {
      const results = await fetchSearchResult(text);
      console.log("Search results:", results);
    } catch (error) {
      console.error("Error results:", error);
    }
  };

  return (
    <div className="out-wrapper">
      <div className="search-page">
        <div className="search-page-wrapper">
          <h2>What to eat today?</h2>
          <div className="search-page__category">
            <button
              className={`category-btn category__chefs-btn ${
                activeButton === "chefs" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("chefs")}
            >
              Chefs
            </button>
            <button
              className={`category-btn category__recipes-btn ${
                activeButton === "recipes" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("recipes")}
            >
              Recipes
            </button>
          </div>

          <div className="search-page__input-wrapper active">
            <input
              className="search-page__search-input"
              type="text"
              placeholder={
                activeButton === "chefs" ? "Search chefs" : "Search recipes"
              }
              value={searchText}
              onChange={handleSearchChange}
            />
            <IoIosSearch className="search-input__icon" />
          </div>
          <div className="search-page__content">
            {activeButton === "chefs" ? "Chefs content" : "Recipes content"}
          </div>
          <div>
            <button
              className="add-recipe-btn"
              onClick={() => setCreateRecipeModalOpen(true)}
            >
              <FaCirclePlus className="add-recipe-icons" />
              Add your recipe
            </button>
            <CreateRecipe
              createRecipeModalOpen={createRecipeModalOpen}
              setCreateRecipeModalOpen={setCreateRecipeModalOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
