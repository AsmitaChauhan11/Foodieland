import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

const articles = [
    { 
        id: 1, 
        title: 'The Creamiest Creamy Pasta', 
        author: 'Lan Burron', 
        description: 'Indulge in the ultimate comfort food with our recipe for the creamiest pasta you\'ve ever tasted! This blog reveals the secrets to achieving a rich, velvety sauce that perfectly coats every bite of pasta. With simple ingredients and an easy-to-follow method, this dish is ideal for cozy dinners or special occasions where only the creamiest pasta will do.',
        date: '24 September 2019', 
        image: '/images/creamypasta.jpg',
        imagePerson: '/images/person7.jpg' 
    },
    { 
        id: 2, 
        title: 'Meat Burritos', 
        author: 'Calie Hanin', 
        description: 'Satisfy your cravings with a hearty and flavorful meat burrito! This blog takes you through the steps to create a burrito packed with seasoned meat, fresh veggies, beans, and cheese, all wrapped in a warm tortilla. Perfect for lunch, dinner, or meal prep, this burrito recipe is customizable and guaranteed to please both spice lovers and those looking for a classic comfort food fix.',
        date: '19 February 2022', 
        image: '/images/meat-burritos.jpg',
        imagePerson: '/images/person8.jpg'
    },
]
export default function BlogPostPage2() {
    const [likedRecipes, setLikedRecipes] = useState([]);
    const handleLike = (id) => {
        setLikedRecipes((prevLiked) =>
            prevLiked.includes(id) ? prevLiked.filter((recipeId) => recipeId !== id) : [...prevLiked, id]
        );
    };

    return (
        <div className="blog-post-container">
                <div className="blog-grid-section">
                    <div className="blog-grid">
                        {articles.map((article) => (
                            <div key={article.id} className="article-card">
                                <div className="article-image-container">
                                    <img src={article.image} alt={article.title} className="blog-recipe-image" />
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={`like-button ${likedRecipes.includes(article.id) ? 'liked' : ''}`}
                                        onClick={() => handleLike(article.id)}
                                    />
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title">
                                        {article.title}
                                    </h3>
                                    <p className="blog-description">
                                        {article.description}
                                    </p>
                                    <div className="author-info-blog">
                                        <img src={article.imagePerson} alt={article.author} className="author-image-blog" />
                                        <span>{article.author}</span> - <span>{article.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    );
}
