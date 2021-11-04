import React from 'react';
import './storycard.css';

function StoryCard ({ stories, author, title, publishedAt }) {
    return (
        <div>
            {stories && stories.map((story) => (
                <div className="story">
                    <h3>
                        {story.title}
                    </h3>
                    <h4>
                        BY: {story.author}
                    </h4>
                </div>
            ))}
        </div>
    );
}

export default StoryCard;