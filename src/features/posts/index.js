import React, { useState, useEffect, useContext } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

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

  function loadPostForm() {
    return (
      <PostForm addPost={addPost} />
    )
  }

  return (
    <Router>
      <Route path='/blogs/:blogId/posts/new' render={loadPostForm} />
      <Link to={`/blogs/${blogId}/posts`}>ALL POSTS</Link>
      <Link to={`/blogs/${blogId}/posts/new`}><span title="new post" className="btn btn-round">+</span></Link>
      {postView}
    </Router>
  )
}