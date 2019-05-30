import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

        <Link to={`/posts/${post.id}/read`}>Read more..</Link>
        <button onClick={() => props.deletePost(post.id)}>Delete</button>
        <hr className="content-divider" />
      </div >
    )
})

return (
  <>
    <PostForm addPost={props.addPost} />
    {postView}
  </>
)
}