import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faClock, faUtensils, faHeart } from  "@fortawesome/free-solid-svg-icons";

const recipes = [
    {
        id : 1,
        title :'Mixed Tropical Fruit Salad with Superfood Boost',
        image :'/images/tropical-salad.jpg',
        time :'30 Minutes',
        cuisine :'Healthy',
    },
    {
        id : 2,
        title :'Steak with Fries',
        image :'/images/steak-fries.jpg',
        time :'30 Minutes',
        cuisine :'Western',
    },
    {
        id : 3,
        title :'Healthy Japanese Fried Rice with Asparagus',
        image :'/images/japenese-rice.jpg',
        time :'30 Minutes',
        cuisine :'Healthy',
    },
    {
        id : 4,
        title :'Meat Burrito',
        image :'/images/meat-burritos.jpg',
        time : '30 Minutes',
        cuisine :'Eastern',
    },
    {
        id : 5,
        title :'Manchurian with Noodles',
        image :'/images/manchurian.jpg',
        time :'30 Minutes',
        cuisine :'Asian',
    },
    {
        id : 6,
        title :'Barbeque Spicy Sandwiches',
        image :'/images/sandwich.jpg',
        time : '30 Minutes',
        cuisine :'Snack',
    },
    {
        id : 7,
        title :'Sushi',
        image :'/images/sushi.jpg',
        time :'30 Minutes',
        cuisine :'Japanese',
    },
    {
        id : 8,
        title :'Chicken Ramen Soup',
        image :'/images/chicken-soup.jpg',
        time : '30 Minutes',
        cuisine :'Japanese',
    },
]

export default function InstaTryrecipe(){
    const [likedRecipes, setLikedRecipes] = useState([]);
    const handleLike = (id) => {
        if (likedRecipes.includes(id)) {
            setLikedRecipes(likedRecipes.filter(recipeId => recipeId !== id));
        } else {
            setLikedRecipes([...likedRecipes, id]);
        }
    };
    return(
        <>
        <div className='insta-page'>
            <h2 className='insta-title'>Check out @foodieland_app on Instagram</h2>
            <p className='insta-description'>Fresh ingredients, delicious recipes, and a lot of love. That’s what makes our kitchen unique. 🍅🥗✨ #HealthyEating #Foodieland</p>
            <div className='insta-gallery'>
                <div className='insta-card'>
                    <img src="/images/insta-pastry.jpg" alt="insta post1" className='insta-img'></img>
                </div>
                <div className='insta-card'>
                    <img src="/images/insta-salad.jpg" alt="insta pos2" className='insta-img'></img>
                </div>
                <div className='insta-card'>
                    <img src="/images/insta-pasta.jpg" alt="insta pos3" className='insta-img'></img>
                </div>
                <div className='insta-card'>
                    <img src="/images/insta-paneer.jpg" alt="insta pos4" className='insta-img'></img>
                </div>
            </div>
            <a href="https://www.instagram.com/foodieland_app/" target="_blank" rel="noopener noreferrer" className="instagram-button">
                Visit Our Instagram <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </a>       
        </div>


        <div className="try-recipes">
            <h2 className='try-title'>Try these delicious recipe to make your day</h2>
            <p className='try-description'>Discover a world of flavors with our curated collection of easy and delicious recipes that will make every meal special. Whether you're craving something healthy or comforting, we have the perfect dish for you. 🍲✨</p>
            <div className='try-container'>
                {recipes.map((recipes) => (
                    <div key={recipes.id} className="try-card">
                        <div className="try-image-container">
                            <img src={recipes.image} alt={recipes.title} className="card-image" />
                            <FontAwesomeIcon
                                icon={faHeart}
                                className={`like-button ${likedRecipes.includes(recipes.id) ? 'liked' : ''}`}
                                onClick={() => handleLike(recipes.id)}
                            />
                        </div>
                        <div className="try-content">
                            <h3 className="try-title">{recipes.title}</h3>
                            <div className="try-tags">
                                <span className="try-tag">
                                    <FontAwesomeIcon icon={faClock} style={{ fontSize:'20px', marginRight: '5px' }} />
                                    {recipes.time}
                                </span>
                                <span className="try-tag">
                                    <FontAwesomeIcon icon={faUtensils} style={{ fontSize:'20px', marginRight: '5px' }} />
                                    {recipes.cuisine}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}