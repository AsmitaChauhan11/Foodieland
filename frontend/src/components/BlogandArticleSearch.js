import React, { useState } from 'react';
export default function BlogandArticleSearch(){
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            // Perform search functionality here, such as filtering articles
            console.log(`Searching for: ${searchTerm}`);
            setSearchTerm(''); 
        }
    };
    return(
        <div className="blog-article">
            <h2 className="blog-title">Blog & Article</h2>
            <p className="blog-description">
                Learn more about recipes, cooking tips, and culinary insights from our experts            
            </p>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search Blogs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
}