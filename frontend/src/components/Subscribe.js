import React, { useState } from 'react';

export default function Subscribe() {
    const [story, setStory] = useState('');

    const handleStoryChange = (e) => {
        setStory(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic here
        console.log('Story:', story);
        // Reset form
        setStory('');

    };

    return (
        <div className="add-story-container">
            <h2>Deliciousness to your inbox</h2>
            <p>Subscribe to our newsletter and receive the latest recipes, culinary tips, and mouth-watering inspiration directly in your inbox. Join our community of food lovers today!</p>
            <form onSubmit={handleSubmit} className="add-story-form">
                <input
                    type="text"
                    placeholder="Enter your email and subscribe for more"
                    value={story}
                    onChange={handleStoryChange}
                    className="story-input"
                />
                <button type="submit" className="submit-button">
                    Subscribe
                </button>
            </form>
        </div>
    );
}
