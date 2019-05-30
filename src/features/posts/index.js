import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

import PostForm from './post-form';

import './post.css';

export default function Posts({ posts, blogId, addPost, deletePost }) {



  useEffect(() => {

  }, []);

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
      {postView}
    </>
  )
}