const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    commentAuthor: {
        type: String,
    },
    commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 250,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

module.exports = commentSchema;