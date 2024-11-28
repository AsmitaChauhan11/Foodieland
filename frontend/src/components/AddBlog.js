import React, { useState } from 'react';

export default function AddBlog() {
    const [story, setStory] = useState('');
    const [image, setImage] = useState(null);

    const handleStoryChange = (e) => {
        setStory(e.target.value);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic here
        console.log('Story:', story);
        console.log('Image:', image);

        // Reset form
        setStory('');
        setImage(null);
    };

    return (
        <div className="add-story-container">
            <h2>Add your story</h2>
            <p>Contribute your personal culinary story and connect with fellow food enthusiasts!</p>
            <form onSubmit={handleSubmit} className="add-story-form">
                <label htmlFor="image-upload" className="upload-button">
                    Attach Photo
                    <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </label>
                <input
                    type="text"
                    placeholder="What's on your mind"
                    value={story}
                    onChange={handleStoryChange}
                    className="story-input"
                />
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
}
