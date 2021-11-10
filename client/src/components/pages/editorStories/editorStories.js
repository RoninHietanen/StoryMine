import React, { useState } from 'react';
import './editorStories.css';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

import { ADD_STORY } from '../../../utils/mutations';
import { QUERY_STORIES } from '../../../utils/queries';

const Edit = () => {

    const [formState, setFormState] = useState({
        title: '',
        storyText: '',
    });

    const [addStory, {error}] = useMutation(ADD_STORY, {
        update(cache, {data: { addStory }}) {
            try {
                const { stories } = cache.readQuery({ query: QUERY_STORIES });

                cache.writeQuery({
                    query: QUERY_STORIES,
                    data: { stories: [addStory, ...stories] },
                });
            } catch (err) {
                console.log(err);
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addStory({
            variables: { ...formState },
          });
    
          setFormState({
            title: '',
            storyText: '',
          });
        } catch (err) {
          console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'storyText') {
          setFormState({ ...formState, [name]: value });
        } else if (name !== 'storyText') {
          setFormState({ ...formState, [name]: value });
        }
    };

    return (
        <div>
            <button className="publish-btn" type="submit"><Link to="/view" className="text">Publish</Link></button>
            <div className="edit-box">
                <div className="story-edit-head">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            name="title"
                            value={formState.title}
                            className="title-input"
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <div className="story-edit-box">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            name="storyText"
                            value={formState.storyText}
                            className="story-input"
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;