import React from 'react';
import './editorStories.css';

function Edit () {
    return (
        <div>
            <button class="publish-btn" type="submit">Publish</button>
            {/* <button class="edit-btn" type="submit">Edit</button> */}
            <div className="edit-box">
                <div className="story-edit-head">
                    <form>
                        <input
                            type="text"
                            id="title"
                            name="tt"
                            className="title-input"
                        />
                    </form>
                </div>
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
        </div>
    );
}

export default Edit;