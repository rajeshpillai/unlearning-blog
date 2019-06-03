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
      <div className="post" key={post.id}>
        <h2>{post.title}</h2>
        <div>{post.desc}</div>
        <div>Category: {post.category}</div>

        <Link to={`/posts/${post.id}/read`}>Read more..</Link>
        <Link to={`/posts/${post.id}/edit`}><button>EDIT</button></Link>
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