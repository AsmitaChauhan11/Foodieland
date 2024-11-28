import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="faq-item">
        <div className="faq-question" onClick={onClick}>
            <h3>{question}</h3>
            <span>{isOpen ? '−' : '+'}</span>
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
);

export default function FAQ() {
    const [openItem, setOpenItem] = useState(null);

    const handleToggle = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    const recipeQuestions = [
        { question: 'How do I know when my recipe is fully cooked?', answer: 'Cooking times vary depending on the type of recipe and the ingredients used. For most dishes, follow the recipe\'s suggested cooking time and use a thermometer to ensure meats reach a safe internal temperature. You can also look for visual cues, such as browning or thickening, as indicators.' },
        { question: 'Can I substitute ingredients if I don\'t have everything listed in the recipe?', answer: 'Yes! Many ingredients have substitutes that can work well. For instance, if you\'re out of buttermilk, you can mix milk with a little lemon juice. Just keep in mind that substitutions might alter the flavor or texture slightly.' },
        { question: 'How do I prevent my food from sticking to the pan?', answer: 'To prevent sticking, ensure your pan is preheated before adding oil or butter. Use a non-stick pan if available, and avoid overcrowding the pan. Adding food to a cold pan or cooking with too little oil can lead to sticking.' },
        { question: 'What are some tips for meal prepping?', answer: 'Start by choosing recipes that store well, like soups, stews, and salads. Invest in good-quality containers, label each meal with the date, and refrigerate or freeze as needed. Dedicate a specific day to meal prep to save time during the week.' },
        { question: 'How can I make my dish more flavorful?', answer: 'Seasoning at different stages can enhance flavor. Use fresh herbs and spices, marinate meats, and taste as you cook. Adding a bit of acid, like lemon juice or vinegar, at the end can also brighten the flavors in your dish.' }
    ];

    const generalQuestions = [
        { question: 'What is the main purpose of this website?', answer: 'Our website is designed to provide a platform where food lovers can find and share delicious recipes, learn cooking techniques, and get inspiration for meals. We aim to make cooking enjoyable, accessible, and easy for everyone, from beginners to seasoned chefs.' },
        { question: 'Do I need to create an account to access recipes?', answer: 'No, you can browse and view all recipes without creating an account. However, creating an account allows you to save your favorite recipes, submit your own, and leave reviews and comments, helping you get the most out of our community.' },
        { question: 'Can I submit my own recipes to the website?', answer: 'Absolutely! We encourage our users to share their unique and creative recipes with our community. Simply create an account, navigate to the "Blog" section, and follow the prompts to upload your recipe details, ingredients, and cooking instructions.' },
        { question: 'How do I search for specific types of recipes?', answer: 'You can use our search bar at the "Recipe" section of the page to find recipes by keyword, ingredient. Additionally, you can filter recipes by dietary preferences, cooking time, difficulty level, and more to find the perfect recipe for any occasion.' },
        { question: 'How can I contact support if I encounter an issue on the website?', answer: ' If you have any questions or need assistance, please visit our Contact page. You can fill out the form provided, and our support team will get back to you as soon as possible. Alternatively, you can email us directly at foodieland_app@gmail.com' }
    ];

    return (
        <div className="faq-container">
            <h1>FAQs</h1>

            <div className="faq-section">
                <div className="faq-image">
                    <img src="/images/biryani.jpg" alt="Recipe related" />
                </div>
                <div className="faq-content">
                    <h2>Recipe related questions</h2>
                    {recipeQuestions.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openItem === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="faq-section reverse">
                <div className="faq-content">
                    <h2>Every Question Answered</h2>
                    {generalQuestions.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openItem === index + recipeQuestions.length}
                            onClick={() => handleToggle(index + recipeQuestions.length)}
                        />
                    ))}
                </div>
                <div className="faq-image">
                    <img src="/images/food-platter.jpg" alt="Every Question" />
                </div>
            </div>
        </div>
    );
}
