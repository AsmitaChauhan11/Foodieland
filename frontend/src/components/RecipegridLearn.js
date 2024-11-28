import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock, faUtensils, faHeart } from  "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
const recipeslist = [
    {
        id: 1,
        title: 'Big and Juicy Wagyu Beef Cheeseburger',
        image: '/images/hamburger.jpg',
        time: '30 minutes',
        type: 'Snack',
    },
    {
        id: 2,
        title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
        image: '/images/salmon.jpg',
        time: '30 minutes',
        type: 'Fish',
    },
    {
        id: 3,
        title: 'Strawberry Oatmeal Pancake with Honey Syrup',
        image: '/images/strawberry-pancake.jpg',
        time: '30 minutes',
        type: 'Breakfast',
    },
    {
        id: 4,
        title: 'Fresh and Healthy Mixed Mayonnaise salad',
        image: '/images/mayoo-salad.jpg',
        time: '30 minutes',
        type: 'Healthy',
    },
    {
        id: 5,
        title: 'Chicken Meatballs with Cream Cheese',
        image: '/images/meatballs.jpg',
        time: '30 minutes',
        type: 'Meat',
    },
    {
        id: 6,
        title: 'Chocolate Truffle Cake',
        image: '/images/cake.jpg',
        time: '30 minutes',
        type: 'Snack',
    },
    {
        id: 7,
        title: 'Fruity Pancake with Orange & Blueberry',
        image: '/images/fruity-pancake.jpg',
        time: '30 minutes',
        type: 'Sweet',
    },
    {
        id: 8,
        title: 'The Best Easy One Pot Chicken and Rice',
        image: '/images/potchicken.jpg',
        time: '30 minutes',
        type: 'Snack',
    },
    {
        id: 9,
        title: 'The Creamiest Creamy Pasta',
        image: '/images/creamypasta.jpg',
        time: '30 minutes',
        type: 'Pasta',
    },
]

export default function RecipegridLearn(){
    const [likedRecipes, setLikedRecipes] = useState([]);

    const handleLike = (id) => {
        if (likedRecipes.includes(id)) {
            setLikedRecipes(likedRecipes.filter(recipeId => recipeId !== id));
        } else {
            setLikedRecipes([...likedRecipes, id]);
        }
    };

    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/faq'); 
    };

    return(
        <>
        <div className="recipe-grid-section">
            <h2 className="section-title">Simple and tasty recipes</h2>
            <p className="section-description">
                Savor the joy of cooking with these simple and flavorful recipes that bring happiness to every meal.
            </p>
            <div className="recipe-grid">
                {recipeslist.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <div className="card-image-container">
                            <img src={recipe.image} alt={recipe.title} className="card-image" />
                            <FontAwesomeIcon
                                icon={faHeart}
                                className={`like-button ${likedRecipes.includes(recipe.id) ? 'liked' : ''}`}
                                onClick={() => handleLike(recipe.id)}
                            />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">{recipe.title}</h3>
                            <div className="card-tags">
                                <span className="card-tag">
                                    <FontAwesomeIcon icon={faClock} style={{ fontSize:'20px', marginRight: '5px' }} />
                                    {recipe.time}
                                </span>
                                <span className="card-tag">
                                    <FontAwesomeIcon icon={faUtensils} style={{ fontSize:'20px', marginRight: '5px' }} />
                                    {recipe.type}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



        <div className="learn-section">
            <div className="learn-col1">
                <h1 className="learn-title">Everyone can be Chef in their own kitchen</h1>
                <p className="learn-description">
                    Transform everyday ingredients into extraordinary dishes with our expert guidance.
                </p>
                <button className="learn-more"  onClick={handleLearnMoreClick}>Learn More</button>
            </div>
            <div className="learn-col2">
            <img src="/images/cheflearn.png" alt="Dish" className="learn-image" />
            </div>
        </div>
        </>
    )
}