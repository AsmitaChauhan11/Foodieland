import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faPrint } from "@fortawesome/free-solid-svg-icons";
import RecipeReviewCard from "../components/RecipeReviewCard";
import { Box } from "@mui/material";

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      async function fetchRecipes() {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&number=3&apiKey=${API_KEY}&includeNutrition=true`
          );
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          const data = await response.json();
          setRecipes(data);
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
        }
      }
      fetchRecipes();
    } else {
      alert("Please enter an ingredient to search.");
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="action-button" onClick={handleShare}>
          <div className="shareprint-icon">
            <FontAwesomeIcon icon={faShare} />
          </div>
          <p>SHARE</p>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Ingredients"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="action-button" onClick={handlePrint}>
          <div className="shareprint-icon">
            <FontAwesomeIcon icon={faPrint} />
          </div>
          <p>PRINT</p>
        </div>
      </div>
      <Box className="recipes-container">
        {recipes.map((recipe) => (
          <RecipeReviewCard
            className="recipe-card"
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </Box>
    </>
  );
}
