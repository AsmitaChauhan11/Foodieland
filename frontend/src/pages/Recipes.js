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

  // const handleSearch = () => {
  //   if (searchTerm.trim() !== "") {
  //     async function fetchRecipes() {
  //       try {
  //         const response = await fetch(
  //           `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&number=3&apiKey=${API_KEY}&includeNutrition=true`
  //         );
  //         if (!response.ok) {
  //           throw new Error(
  //             "Network response was not ok " + response.statusText
  //           );
  //         }
  //         const data = await response.json();
  //         setRecipes(data);
  //       } catch (error) {
  //         console.error("There was a problem with the fetch operation:", error);
  //       }
  //     }
  //     fetchRecipes();
  //   } else {
  //     alert("Please enter an ingredient to search.");
  //   }
  // };

  const restrictedCombinations = [
    ["milk", "lemon"],
    ["milk", "red pepper"],
    ["honey", "tofu"],
    ["fish", "milk"],
    ["curd", "onion"],
    ["milk", "salt"],
  ];

  const checkRestrictedCombination = (ingredients) => {
    for (let pair of restrictedCombinations) {
      if (pair.every((item) => ingredients.includes(item.toLowerCase()))) {
        alert(`No recipe found for ${pair.join(" and ")}`);
        return true;
      }
    }
    return false;
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const ingredients = searchTerm
        .toLowerCase()
        .split(",")
        .map((item) => item.trim());

      if (checkRestrictedCombination(ingredients)) return; // Stop the API call if restricted

      async function fetchRecipes() {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&number=3&apiKey=${API_KEY}&cuisine=Indian&includeNutrition=true`
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

      <div className="order-now-section">
        <h3 className="order-question">Don't have the ingredients?</h3>
        <h3 className="order-call">ORDER NOW</h3>
        <div className="delivery-options">
          <a
            href="https://www.zeptonow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/zepto.jpeg"
              alt="Order from Zepto"
              className="delivery-logo"
            />
          </a>
          <a
            href="https://www.blinkit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/blinkit.jpg"
              alt="Order from Blinkit"
              className="delivery-logo"
            />
          </a>
        </div>
      </div>
    </>
  );
}
