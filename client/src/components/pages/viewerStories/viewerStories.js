import React from 'react';
import './viewerStories.css';

import CommentCard from '../comment-card/commentcard';

function View ({stories}) {
    console.log({stories});
    return (
        <div>
            <div className="story-box">
                {stories && stories.map((story) => (
                    
                    <div>
                        <div className="story-head">
                            <h1 className="title" key={story._id}><span>{story.title}</span></h1>
                        </div>
                        <div className="story">
                            <p>
                                {story.storyText}
                            </p>
                        </div>
                    </div>
                    
                ))}
            </div>

            <div className="add-comment-box">
                <form>
                    <input
                        type="text"
                        id="comment-text"
                        name="ct"
                        className="comment-input"
                    />
                    <button class="comment-btn" type="submit">Add Comment</button> 
                </form>
            </div>

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