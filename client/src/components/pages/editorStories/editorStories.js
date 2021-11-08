import React from 'react';
import './editorStories.css';

function Edit () {
    return (
        <div>
            <button class="publish-btn" type="submit">Publish</button>
            {/* <button class="edit-btn" type="submit">Edit</button> */}
            <div className="story-edit-box">
                <form>
                    <input
                        type="text"
                        id="story"
                        name="st"
                        className="story-input"
                    />
                </form>
            </div>
        </div>
    );
}

export default Edit;