import React from 'react';
import './viewerStories.css';

import CommentCard from '../comment-card/commentcard';

function View (stories, author, title, storyText) {
    return (
        <div>
            {stories && stories.map((story) => (
                <div className="story-box">
                    <div className="story-head">
                        <h1 className="title"><span>{story.title}</span></h1>
                        <h1 className="author"><span>{story.author}</span></h1>
                    </div>
                    <div className="story">
                        <p>
                            {story.storyText}
                        </p>
                    </div>

                </div>
            ))}

            <div className="comments-box">
                <h2 className="comment-head">Comments</h2>
                <div className="comments">
                    <CommentCard />
                </div>
            </div>
        </div>
    );
}

export default View;