import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import BlogPostPage2 from "./BlogPostPage2";
import BlogPostArticle from "./BlogPostArticle";

const articles = [
  {
    id: 1,
    title: "Crochet Projects for Noodle Lovers",
    author: "Wade Warren",
    description:
      "Dive into the world where art meets appetite! This blog explores creative crochet projects inspired by beloved noodle dishes. Perfect for noodle lovers and crochet enthusiasts alike, these projects add a cozy, food-themed twist to your crafting repertoire.From ramen-inspired scarves to pasta-shaped keychains, these crochet creations are sure to bring a smile to anyone who loves both food and fiber arts.",
    date: "12 November 2021",
    image: "/images/chicken-soup.jpg",
    imagePerson: "/images/person.jpg",
  },
  {
    id: 2,
    title: "10 Vegetarian Recipes To Eat This Month",
    author: "Robert Fox",
    description:
      "Looking for fresh, flavorful vegetarian dishes to try? This blog features ten seasonal recipes packed with vibrant vegetables and wholesome ingredients. From hearty salads to satisfying mains, these recipes are perfect for anyone wanting to eat healthily and enjoy meat-free meals. Whether you're a lifelong vegetarian or simply looking to add more plant-based meals to your diet, these recipes are both delicious and nourishing.",
    date: "01 June 2023",
    image: "/images/tropical-salad.jpg",
    imagePerson: "/images/person2.jpg",
  },
  {
    id: 3,
    title: "Simple & Delicious Vegetarian Lasagna",
    author: "Leslie Alexander",
    description:
      "Enjoy a comforting classic with a vegetarian twist! This blog presents a simple, easy-to-follow recipe for a delicious, veggie-packed lasagna. Layered with savory vegetables, creamy cheese, and rich tomato sauce, this lasagna is bound to become a family favorite.Perfect for weeknight dinners or special gatherings, this dish proves that comfort food can be wholesome and satisfying.",
    date: "29 May 2022",
    image: "/images/lasagna.jpg",
    imagePerson: "/images/person3.jpg",
  },
  {
    id: 4,
    title: "Plantain and Pinto Stew with Aji Verde",
    author: "Courtney Henry",
    description:
      "Discover a flavorful fusion of plantains and pinto beans in this hearty stew, complemented by the zesty kick of Aji Verde sauce. This blog guides you through creating this warming dish, ideal for chilly days and perfect for those who love a bit of South American flair in their cooking. With its vibrant flavors and comforting ingredients, this stew is a unique, crowd-pleasing dish that brings warmth and excitement to your table.",
    date: "09 April 2024",
    image: "/images/plantainandpinto.jpg",
    imagePerson: "/images/person4.jpg",
  },
  {
    id: 5,
    title: "Full Guide to Becoming a Professional Chef",
    author: "Dianne Russell",
    description:
      "Have you dreamed of working in a professional kitchen? This comprehensive guide covers everything you need to know about becoming a chef, from essential skills and training to the highs and lows of the culinary world. Perfect for aspiring chefs, this blog provides insider tips to help you kickstart your culinary career. Whether you're passionate about fine dining or eager to master classic techniques, this guide will inspire and equip you for success in the culinary arts.",
    date: "30 August 2020",
    image: "/images/mainimage.png",
    imagePerson: "/images/person5.jpg",
  },
  {
    id: 6,
    title: "We're Hiring a Communications Assistant!",
    author: "Albert Flores",
    description:
      "Join our team! We’re looking for a creative and enthusiastic Communications Assistant to help us share our brand’s story and connect with our community. This blog provides an overview of the role, responsibilities, and why it’s an exciting opportunity for those with a passion for food and communication. If you’re ready to bring fresh ideas and make an impact in a dynamic environment, this could be the perfect role for you!",
    date: "19 October 2024",
    image: "/images/hiring.png",
    imagePerson: "/images/person6.jpg",
  },
];

export default function BlogPost() {
  const [currentPage, setCurrentPage] = useState(1);
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleLike = (id) => {
    setLikedRecipes((prevLiked) =>
      prevLiked.includes(id)
        ? prevLiked.filter((recipeId) => recipeId !== id)
        : [...prevLiked, id]
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleArticleClick = (article) => {
    if (article.id === 5) {
      // Only open detailed view for article with ID 5
      setSelectedArticle(article);
    }
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <BlogPostArticle
        article={selectedArticle}
        onBack={handleBackToArticles}
      />
    );
  }

  return (
    <div className="blog-post-container">
      {currentPage === 1 ? (
        <div className="blog-grid-section">
          <div className="blog-grid">
            {articles.map((article) => (
              <div key={article.id} className="article-card">
                <div className="article-image-container">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="blog-recipe-image"
                  />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`like-button ${
                      likedRecipes.includes(article.id) ? "liked" : ""
                    }`}
                    onClick={() => handleLike(article.id)}
                  />
                </div>
                <div className="blog-content">
                  <h3
                    className="blog-title"
                    onClick={() => handleArticleClick(article)}
                  >
                    {article.title}
                  </h3>
                  <p className="blog-description">{article.description}</p>
                  <div className="author-info-blog">
                    <img
                      src={article.imagePerson}
                      alt={article.author}
                      className="author-image-blog"
                    />
                    <span>{article.author}</span> - <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <BlogPostPage2 />
      )}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(1)}
          className={currentPage === 1 ? "active" : ""}
        >
          1
        </button>
        <button
          onClick={() => handlePageChange(2)}
          className={currentPage === 2 ? "active" : ""}
        >
          2
        </button>
      </div>
    </div>
  );
}
