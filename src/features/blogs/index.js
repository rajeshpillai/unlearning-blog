import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/app-context';
import './index.css';

export default function Blogs(props) {
  let { blogs } = props;

  const appContext = useContext(AppContext);

  useEffect(() => {
    appContext.setBlogId(null);
    console.log(`setting blogid to null`);
  }, [appContext]);


  let blogUI = blogs.map((blog) => {
    return (
      <div key={blog.id}>
        <h2>{blog.title}</h2>
        <div>{blog.desc}</div>
        <div>{blog.category}</div>

        <Link to={`/blogs/${blog.id}/posts`}>Show Posts</Link>
        <button onClick={() => props.deleteBlog(blog.id)} className="button muted-button">
          Delete
       </button>

        <hr className="content-divider" />
      </div>
    )
  });

  return (
    <div class="blogs">
      <h2>Blogs Listing</h2>
      {blogUI}
    </div>
  )
}