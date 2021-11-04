import React from 'react';
import './commentcard.css';

function CommentCard ( {comments, commentText, commentAuthor, createAt }) {
    return (
        <div>
            {comments && comments.map((comment) => (
                <div className="comment">
                    <p>
                        {comment.commentText}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default CommentCard;