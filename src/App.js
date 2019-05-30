import React, { useState, useEffect } from 'react';
import './App.css';
import Blogs from './features/blogs'
import BlogForm from './features/blogs/blog-form'

const defaultState = [
  {
    id: 1, title: "Learn Mathematics",
    desc: "Coming soon", category: "Mathematics", subcat: "Basic Maths"
  },
  {
    id: 2, title: "Learn Angular Step By Step",
    desc: "Coming soon", category: "Web Development", subcat: "Angular"
  }
]



function App() {
  const [blogs, setBlogs] = useState(defaultState);

  const showPosts = (blogId) => {
    alert(blogId);
  }

  const addBlog = blog => {
    blog.id = blogs.length + 1;
    setBlogs([...blogs, blog]);
  }

  const deleteBlog = id => {
    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Unlearning Labs
        </p>
      </header>
      <h2>Blogs Listing</h2>
      <BlogForm addBlog={addBlog} />
      <Blogs blogs={blogs} onShowPost={showPosts} deleteBlog={deleteBlog} />
    </div>
  );
}

export default App;
