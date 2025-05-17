// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Box, Modal } from "@mui/material";
// import RecipeStepModal from "./RecipeStepModal";
// import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";

// const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: "rotate(0deg)",
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: "rotate(180deg)",
//       },
//     },
//   ],
// }));

// export default function RecipeReviewCard({ recipe }) {
//   const [expanded, setExpanded] = useState(false);
//   const [summary, setSummary] = useState(null);

//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   useEffect(() => {
//     const fetchSummary = async () => {
//       try {
//         const response = await fetch(
//           `https://api.spoonacular.com/recipes/${recipe.id}/summary?apiKey=${API_KEY}&includeNutrition=true`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();
//         const cleanedSummary =
//           result.summary.split(".").slice(0, 4).join(".") + ".";
//         setSummary(cleanedSummary);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchSummary();
//   }, [recipe.id]);

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         action={
//           <IconButton aria-label="settings" onClick={handleOpen}>
//             <SoupKitchenIcon fontSize="large" color="primary" />
//           </IconButton>
//         }
//         title={recipe.title}
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={recipe.image}
//         alt="Image"
//       />
//       <CardContent>
//         <Typography
//           variant="body2"
//           sx={{ color: "text.secondary" }}
//           component="div"
//           dangerouslySetInnerHTML={{ __html: summary }}
//         />
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography sx={{ marginBottom: 2 }}>
//             <b>Ingredients:</b>
//           </Typography>
//           <Box sx={{ pl: 3 }}>
//             <ul style={{ margin: 0 }}>
//               {recipe.missedIngredients.map((step) => (
//                 <Typography
//                   component="li"
//                   sx={{ pl: 2, color: "text.secondary" }}
//                   key={step.id}
//                 >
//                   {step.original}
//                 </Typography>
//               ))}
//             </ul>
//           </Box>
//         </CardContent>
//       </Collapse>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <RecipeStepModal id={recipe.id} title={recipe.title} />
//       </Modal>
//     </Card>
//   );
// }
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Modal, Button } from "@mui/material";
import RecipeStepModal from "./RecipeStepModal";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import NutritionModal from "./NutritionModal";

const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard({ recipe }) {
  const [expanded, setExpanded] = useState(false);
  const [summary, setSummary] = useState(null);
  const [open, setOpen] = useState(false);
  const [nutritionOpen, setNutritionOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNutritionOpen = () => setNutritionOpen(true);
  const handleNutritionClose = () => setNutritionOpen(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipe.id}/summary?apiKey=${API_KEY}&cuisine=Indian&includeNutrition=true`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const cleanedSummary =
          result.summary.split(".").slice(0, 4).join(".") + ".";
        setSummary(cleanedSummary);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSummary();
  }, [recipe.id]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleOpen}>
            <SoupKitchenIcon fontSize="large" color="primary" />
          </IconButton>
        }
        title={recipe.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt="Image"
      />
      <CardContent>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          component="div"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleNutritionOpen}
          sx={{ ml: 1 }}
        >
          Nutrition
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>
            <b>Ingredients:</b>
          </Typography>
          <Box sx={{ pl: 3 }}>
            <ul style={{ margin: 0 }}>
              {recipe.missedIngredients.map((step) => (
                <Typography
                  component="li"
                  sx={{ pl: 2, color: "text.secondary" }}
                  key={step.id}
                >
                  {step.original}
                </Typography>
              ))}
            </ul>
          </Box>
        </CardContent>
      </Collapse>

      {/* Recipe Steps Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RecipeStepModal id={recipe.id} title={recipe.title} />
      </Modal>

      {/* Nutrition Modal */}
      <Modal
        open={nutritionOpen}
        onClose={handleNutritionClose}
        aria-labelledby="nutrition-modal-title"
        aria-describedby="nutrition-modal-description"
      >
        <NutritionModal id={recipe.id} />
      </Modal>
    </Card>
  );
}
