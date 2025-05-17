import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function NutritionModal({ id }) {
  const [nutrition, setNutrition] = useState(null);

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setNutrition(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNutritionData();
  }, [id]);

  return (
    <Box sx={style}>
      <Typography id="nutrition-modal-title" variant="h5" component="h2">
        <b>Nutrition Information</b>
      </Typography>
      {nutrition ? (
        <Box sx={{ mt: 2 }}>
          <Typography>
            <b>Calories:</b> {nutrition.calories}
          </Typography>
          <Typography>
            <b>Fat:</b> {nutrition.fat}
          </Typography>
          <Typography>
            <b>Carbs:</b> {nutrition.carbs}
          </Typography>
          <Typography>
            <b>Protein:</b> {nutrition.protein}
          </Typography>
        </Box>
      ) : (
        <Typography sx={{ mt: 2, color: "text.secondary" }}>
          Loading nutrition information...
        </Typography>
      )}
    </Box>
  );
}

export default NutritionModal;
