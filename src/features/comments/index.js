import React from 'react';
import './comments.css';

export default function Comments({ comments }) {
  const commentUI = (comments || []).map((comment) => {
    return (
      <div className="comment">
        <h6 className="comment-author">{comment.author}</h6>
        {comment.content}
        <h6 className="comment-date">Commented on: {comment.commentedOn.toString()}</h6>
      </div>
    )
  });
  return (
    <div className="comments">
      {commentUI.length > 0 ? commentUI : "No conversations yet!!"}
    </div>
  )
}