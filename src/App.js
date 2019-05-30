import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Blogs from './features/blogs'
import BlogForm from './features/blogs/blog-form'
import Posts from './features/posts';

import './App.css';

const initBlogs = [
  {
    id: 1, title: "Learn Mathematics",
    desc: "Coming soon", category: "Mathematics", subcat: "Basic Maths"
  },
  {
    id: 2, title: "Learn Angular Step By Step",
    desc: "Coming soon", category: "Web Development", subcat: "Angular"
  }
]

const initPosts = [
  {
    id: 1, blogId: 1, title: "Tutorial 1"
  },
  {
    id: 2, blogId: 1, title: "Tutorial 2"
  }
]


function App() {
  const [blogs, setBlogs] = useState(initBlogs);
  const [posts, setPosts] = useState(initPosts);


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


  const addPost = post => {
    post.id = posts.length + 1;
    setPosts([...posts, post]);
  }

  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id))
  }

  useEffect(() => {

  }, [])

  function loadBlog() {
    return <>
      <h2>Blogs Listing</h2>
      <Blogs blogs={blogs} onShowPost={showPosts} deleteBlog={deleteBlog} />
    </>
  }

  function loadBlogForm() {
    return <>
      <BlogForm addBlog={addBlog} />
    </>
  }

  function loadPosts(props) {
    console.log("lp:", props);
    let p = posts.filter(post => post.blogId == props.match.params.blogId);
    return <Posts posts={p} deletePost={deletePost} addPost={addPost} />
  }

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <p>
            Unlearning Labs
        </p>
          <Link to="/">Blogs</Link>
        </header>
        <Route exact path="/" render={loadBlog} />
        <Route path="/blog-form" render={loadBlogForm} />
        <Route path="/blogs/:blogId/posts" render={loadPosts} />
      </div>
    </Router>
  );
}

export default App;
