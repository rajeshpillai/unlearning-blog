import React, { useState, useEffect } from 'react';

export default function Blogs(props) {
  let { blogs } = props;

  useEffect(() => {

  }, [])

  return (
    blogs.map((blog) => {
      return (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <div>{blog.desc}</div>
          <div>{blog.category}</div>

          <button onClick={props.onShowPost.bind(this, blog.id)}>Show Posts</button>
          <button onClick={() => props.deleteBlog(blog.id)} className="button muted-button">
            Delete
         </button>

          <hr className="content-divider" />
        </div>
      )
    })
  )
}