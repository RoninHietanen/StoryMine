import React from 'react';
import './viewerStories.css';

function View () {
    return (
        <div>
            <div className="story-box">
                <div className="story-head">
                    <h1 className="title"><span>StoryName</span></h1>
                    <h1 className="author"><span>Author</span></h1>
                </div>
                <div className="story">
                    <p>

                    </p>
                </div>

            </div>

            <div className="comments-box">
                <h2 className="comment-head">Comments</h2>
                <div className="comments">
                    
                </div>
            </div>
        </div>
    );
}

export default View;