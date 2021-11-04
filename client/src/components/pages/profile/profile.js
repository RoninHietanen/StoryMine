import React from 'react';
import './profile.css';

import CommentCard from '../comment-card/commentcard';
import StoryCard from '../story-card/storycard';

function Profile () {
    return (
        <div>
            <div>
                <div>
                    <button class="new-btn" type="submit">New Story</button>
                    <button class="about-btn" type="submit">AboutMe</button>
                </div>
                <div className="about-card">
                    <div className="card-text">
                        <h3>About</h3>
                    </div>
                    <div className="about-card-content">
                        <form>
                            <input
                                type="text"
                                id="story"
                                name="st"
                                className="about-input"
                            />
                        </form>
                    </div>
                </div>
            </div>

            <div className="comments-card">
                <div className="card-text">
                    <h3>Comments</h3>
                </div>
                <div className="comment-card-content">
                    <CommentCard />
                </div>
            </div>

            <div className="stories-card">
                <div className="card-text">
                    <h3>Stories</h3>
                </div>
                <div className="story-card-content">
                    <StoryCard />
                </div>
            </div>
        </div>
    );
}

export default Profile;