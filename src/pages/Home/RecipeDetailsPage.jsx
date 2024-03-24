import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";
import mealsPhoto from "../../assets/meals.webp";
import "./recipe-details.css";
import "../main.css";

function RecipeDetailsPage() {
  const navigate = useNavigate();
  return (
    <div className="out-wrapper">
      <div className="recipe-detail">
        <div className="recipe-detail__wrapper">
          <div className="recipe-detail__head-block">
            <img src={mealsPhoto} alt="" />
            <button
              className="recipe-detail__head-btn"
              onClick={() => navigate(-1)}
            >
              <FaCircleArrowLeft className="arrow-left" />
            </button>
          </div>
          <div className="recipe-detail__description-block">
            <div className="recipe-detail__description-block__wrapper">
              <h2 className="recipe-detail__description-block__title">
                Ainsley' Jerk Chicken
              </h2>
              <span>by Ainsley Harriot</span>
              <div className="recipe-detail__description-block__text">
                <div className="recipe-detail__description-block__timer">
                  <span>20-30 min</span>
                </div>
                <h4>Description</h4>
                <div>
                  You pick up your palette knife and then work that into. Give
                  your meat a good old rub. That’s it, nice and hot, hot and
                  spicy meat. He-he boy...You pick up your palette knife and
                  then work that into. Give your meat a good old rub. That’s it,
                  nice and hot, hot and spicy meat. He-he boy...You pick up your
                  palette knife and then work that into. Give your meat a good
                  old rub. That’s it, nice and hot, hot and spicy meat. He-he
                  boy...
                </div>
                <h4>Ingredients</h4>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailsPage;
