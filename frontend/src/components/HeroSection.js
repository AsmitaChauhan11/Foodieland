import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScroll,
  faClock,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const categories = [
  { label: "Breakfast", image: "/images/breakfast.png" },
  { label: "Vegan", image: "/images/vegan.png" },
  { label: "Meat", image: "/images/meat.png" },
  { label: "Dessert", image: "/images/dessert.png" },
  { label: "Lunch", image: "/images/lunch.png" },
  { label: "Chocolate", image: "/images/chocolate.png" },
  { label: "Pasta", image: "/images/pasta.png" },
  { label: "Seafood", image: "/images/seafood.png" },
  { label: "Salad", image: "/images/salad.png" },
  { label: "Smoothie", image: "/images/smoothie.png" },
  { label: "Burger", image: "/images/burger.png" },
  { label: "Healthy", image: "/images/dinner.png" },
];

export default function HeroSection() {
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const initialCategories = categories.slice(0, 6);
  const additionalCategories = categories.slice(6);
  const navigate = useNavigate();

  const handleCategoriesClick = () => {
    navigate("/categories");
  };

  return (
    <>
      <div className="frame-section">
        <div className="col1">
          <button
            style={{
              width: "auto",
              maxWidth: "fit-content",
              whiteSpace: "nowrap",
            }}
            className="hot-recipe"
          >
            <FontAwesomeIcon icon={faScroll} style={{ marginRight: "8px" }} />
            Hot Recipes
          </button>
          <h1 className="recipe-title">Spicy delicious chicken wings</h1>
          <div className="tags">
            <span className="tag">
              <FontAwesomeIcon
                icon={faClock}
                style={{ fontSize: "18px", marginRight: "5px" }}
              />
              30 Minutes
            </span>
            <span className="tag">
              <FontAwesomeIcon
                icon={faUtensils}
                style={{ fontSize: "18px", marginRight: "5px" }}
              />
              Chicken
            </span>
          </div>
          <p className="description">
            These spicy, delicious chicken wings are perfectly seasoned and
            cooked to crispy perfection, then paired with a tangy dipping sauce
            for an irresistible flavor. Enjoy this easy-to-make recipe that
            brings bold taste and satisfaction with every bite.
          </p>
          <div className="author-info">
            <img
              src="/images/person.jpg"
              alt="Author"
              className="author-photo"
            />
            <div>
              <p className="author-name">John Smith</p>
              <p className="publish-date">15 March 2022</p>
            </div>
          </div>
          <button
            className="view-recipes"
            onClick={() => (window.location.href = "/Recipes")}
          >
            View Recipes
          </button>
        </div>
        <div className="col2">
          <img src="/images/chicken.png" alt="Dish" className="dish-image" />
        </div>
      </div>

      <div className="categories-section">
        <div className="categories-header">
          <h2>Categories</h2>
          <button className="view-all-button" onClick={handleShowAll}>
            {showAll ? "Show Less" : "View All Categories"}
          </button>
        </div>
        <div className="categories-container">
          {initialCategories.map((category, index) => (
            <div key={index} className="category-card">
              <img
                src={category.image}
                alt={category.label}
                className="category-icon"
              />
              <p>{category.label}</p>
            </div>
          ))}
        </div>
        {showAll && (
          <div className="categories-container additional-categories">
            {additionalCategories.map((category, index) => (
              <div key={index} className="category-card">
                <img
                  src={category.image}
                  alt={category.label}
                  className="category-icon"
                />
                <p>{category.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button className="learn-more" onClick={handleCategoriesClick}>
          Search by category
        </button>
      </div>
    </>
  );
}
