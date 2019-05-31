import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import PostForm from './post-form';
import AppContext from '../../context/app-context';


import './post.css';

export default function Posts({ posts, blogId, addPost, deletePost }) {
  const appContext = useContext(AppContext);

  useEffect(() => {
    appContext.setBlogId(blogId);
    console.log(`setting blogid to ${blogId}`);
  }, [appContext, blogId]);

  let postView = posts.map((post) => {
    return (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <div>{post.desc}</div>
        <div>{post.category}</div>

        <Link to={`/posts/${post.id}/read`}>Read more..</Link>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div >
    )
  })

  return (
    <>
      <PostForm addPost={addPost} />
      <Link to={`/blogs/${blogId}/posts`}>ALL POSTS</Link>
      {postView}
    </>
  )
}