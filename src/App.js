import React, { useState, useEffect } from 'react';
import './App.css';
import Blogs from './features/blogs'
import BlogForm from './features/blogs/blog-form'
import Posts from './features/posts';


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

  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id))
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
      <Posts posts={posts} deletePost={deletePost}/>
    </div>
  );
}

export default App;
