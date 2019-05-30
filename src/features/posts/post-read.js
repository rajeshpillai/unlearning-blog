import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function PostRead({ post, blogId }) {
  let tagsUI = post.tags.map((tag) => {
    return <span className="tag">{tag}</span>
  })
  return (
    <div>
      <Link to={`/blogs/${blogId}/posts`}>Posts</Link>
      <h2>{post.title} ${tagsUI}</h2>
      <div>{post.content}</div>
    </div>
  )

}