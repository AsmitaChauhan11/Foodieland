import React from 'react';

export default function BlogPostArticle({ article, onBack }){
    if (!article) return null;
    return(
        <div className="blog-post-article">
            <button onClick={onBack} className="back-button">← Return to Articles</button>
            <h1>{article.title}</h1>
            <div className="author-info">
                <img src={article.imagePerson} alt={article.author} className="author-image" />
                <span>{article.author}</span> - <span>{article.date}</span>
            </div>
            <img src={article.image} alt={article.title} className="article-image-full" />
            <div className="article-details">
                <h3 className='questions'>How did you start out in the food industry?</h3>
                <p className='answers'>I began my journey in the food industry at a young age, influenced by my family's love for cooking. Growing up, I would often watch my parents prepare meals for family gatherings, and I was captivated by the way food could bring people together. At 16, I took my first job as a dishwasher at a local restaurant, which allowed me to experience the fast-paced kitchen environment firsthand. I was eager to learn, so I spent my free time shadowing the chefs, absorbing everything I could about cooking techniques and flavor profiles. This early exposure ignited my passion for culinary arts, prompting me to enroll in culinary school after high school, where I honed my skills and laid the foundation for my career. Since then, I’ve been fortunate to work in various kitchens, each experience shaping my culinary philosophy and pushing me to continuously innovate.</p>
                <h3 className='questions'>What do you like most about your job?</h3>
                <p className='answers'>What I love most about my job is the ability to create and share experiences through food. Cooking is not just about preparing meals; it’s about storytelling and connecting with people on a deeper level. I find immense joy in experimenting with flavors and techniques to craft dishes that evoke emotion and nostalgia. Seeing the smiles on guests' faces as they enjoy a meal I’ve prepared is incredibly rewarding. Additionally, I cherish the opportunity to mentor aspiring chefs, helping them discover their passion for cooking and guiding them as they develop their skills. It’s fulfilling to contribute to their growth and witness their journey in the culinary world.</p>
                <h3 className='questions'>Do you cook at home on your days off?</h3>
                <img src="/images/lady-cooking.jpg" className='lady-image' alt='lady'/>
                <p className='answers'>Absolutely! Cooking at home on my days off is one of my favorite ways to unwind and express my creativity. It’s a chance for me to experiment with new recipes or revisit family favorites without the pressure of a professional kitchen. I enjoy preparing meals for my family and friends, sharing the joy of cooking in a more relaxed setting. It allows me to connect with the people I care about while trying out different ingredients and techniques. Plus, it’s a great way to recharge and find inspiration for my work in the restaurant.</p>
                <h3 className='questions'>What would your advice be to young people looking to get their foot at the door?</h3>
                <p className='answers'>My advice to young people looking to get their foot in the door is to stay curious and be open to learning. The culinary world is vast, and there’s always something new to discover, whether it’s a technique, a cuisine, or an ingredient. Start by gaining experience in any kitchen role, even if it’s not glamorous. Every position, from dishwashing to prep work, teaches you valuable lessons about teamwork and the inner workings of a kitchen. Don’t hesitate to ask questions and seek mentorship from experienced chefs; they can provide guidance and insight that can accelerate your growth. Lastly, be passionate and resilient. The culinary industry can be demanding, but if you love what you do and are willing to put in the hard work, opportunities will arise.</p>
                <h3 className='questions'>What is the biggest misconception that people have about being a professional chef?</h3>
                <p className='answers'>The biggest misconception people have about being a professional chef is that it’s all about glamour and creativity. Many envision chefs as artistic geniuses crafting exquisite dishes in beautifully designed kitchens, but the reality is quite different. The job involves long hours in high-pressure environments, requiring hard work, stamina, and a multitude of skills beyond cooking. Chefs spend much of their time on repetitive tasks, managing inventory, and ensuring kitchen cleanliness. Additionally, they must possess strong leadership abilities to guide a team and handle the business aspects of running a kitchen. It’s a demanding profession that calls for resilience, dedication, and a commitment to continuous learning.</p>
                <h2 className='quote'>“Cooking is like love. It should be entered into with abandon or not at all.”</h2>
                <h4 className='quote-author'>— Harriet Van Horne</h4>
            </div>
        </div>
    )
}