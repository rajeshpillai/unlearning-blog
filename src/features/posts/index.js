import React, { useState, useEffect } from 'react';
import PostForm from './post-form';

export default function Posts(props) {
  let { posts } = props;

  useEffect(() => {

  }, []);

  let postView = posts.map((post) => {
    return (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <div>{post.desc}</div>
        <div>{post.category}</div>

        <button onClick={() => props.deletePost(post.id)} className="button muted-button">
          Delete
         </button>

        <hr className="content-divider" />
      </div>
    )
  })

  return (
    <>
      <PostForm addPost={props.addPost} />
      {postView}
    </>
  )
}