import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function RecipeStepModal({ id, title }) {
  const [steps, setSteps] = useState([]);

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}&includeNutrition=true`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setSteps(result[0].steps);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSteps();
  }, []);

  return (
    <Box sx={style}>
      <Box display={"flex"}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          <b>{title}</b>
        </Typography>
        <div className="search-container">
          <div className="action-button" onClick={handlePrint}>
            <div className="shareprint-icon">
              <FontAwesomeIcon icon={faPrint} />
            </div>
            <p>PRINT</p>
          </div>
        </div>
      </Box>
      <Typography
        id="modal-modal-description"
        sx={{ mt: 2, color: "text.secondary" }}
      >
        <ol>
          {steps &&
            steps.map((step) => (
              <li key={step.number}>
                <Typography sx={{ pl: 1, mt: 1 }}>{step.step}</Typography>
              </li>
            ))}
        </ol>
      </Typography>
    </Box>
  );
}

export default RecipeStepModal;
