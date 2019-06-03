import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../components/rating';
import Comments from '../comments';

let md = new window.Remarkable();
export default function PostRead({ post, blogId }) {
  let tagsUI = post.tags.map((tag) => {
    return <Link to={`/posts/${blogId}/tags/${tag}?blogId=${blogId}`} key={tag} className="tag" > {tag}</Link >
  });

  return (
    <div className="post-read">
      <Link to={`/blogs/${blogId}/posts`}>Back to posts</Link>
      <Link to={`/posts/${post.id}/edit`}><button>EDIT</button></Link>
      <h2>{post.title} ${tagsUI}</h2>
      Rating: <Rating value={post.rating} />
      <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>
      <h2>Conversations:</h2>
      <Comments comments={post.comments} />
    </div>
  )
}