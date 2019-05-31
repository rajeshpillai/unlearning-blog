import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let md = new window.Remarkable();
export default function PostRead({ post, blogId }) {
  let tagsUI = post.tags.map((tag) => {
    return <Link to={`/posts/${blogId}/tags/${tag}?blogId=${blogId}`} key={tag} className="tag" > {tag}</Link >
  });

  return (
    <div>
      <Link to={`/blogs/${blogId}/posts`}>Back to posts</Link>
      <Link to={`/posts/${post.id}/edit`}><button>EDIT</button></Link>
      <h2>{post.title} ${tagsUI}</h2>
      <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>
    </div>
  )
}