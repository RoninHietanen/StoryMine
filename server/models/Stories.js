const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = require('./Comments');

const storySchema = new Schema({
    author: [
        {
            type: String,
        },
    ],
    title: {
        type: String,
        required: true,
    },
    storyText: {
        type: String,
    },
    publishedAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    storyComments: [commentSchema],
});

module.exports = storySchema;