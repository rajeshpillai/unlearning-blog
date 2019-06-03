import React from 'react';
import './comments.css';

export default function Comments({ comments }) {
  const commentUI = (comments || []).map((comment) => {
    return (
      <div className="comment">
        <h6>{comment.author}</h6>
        {comment.content}
        <h6>Commented on: {comment.commentedOn.toString()}</h6>
      </div>
    )
  });
  return (
    <div className="comments">
      <h2>Conversations:</h2>
      {commentUI.length > 0 ? commentUI : "No conversations yet!!"}
    </div>
  )
}