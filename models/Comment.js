const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    writtenBy: {
        type: String,
    },
    commentBody: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create Comment model using the CommentSchema

const Comment = model('Comment', CommentSchema);

module.exports = Comment;