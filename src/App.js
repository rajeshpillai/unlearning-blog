import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Blogs from './features/blogs'
import BlogForm from './features/blogs/blog-form'
import Posts from './features/posts';
import PostRead from './features/posts/post-read';

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
    id: 1, blogId: 1, title: "Tutorial 1",
    content: generateContent(10),
    tags: ["c#", "programming", "microsoft"]
  },
  {
    id: 2, blogId: 1, title: "Tutorial 2",
    content: generateContent(10),
    tags: ["javascript", "es5", "es6"]
  },
  {
    id: 3, blogId: 1, title: "Tutorial 3",
    content: generateContent(10),
    tags: ["javascript"]
  }
]

function generateContent(words) {
  let baseContent = `Contrary to popular belief, Lorem Ipsum is not simply random text. `;

  for (let i = 0; i < words; i++) {
    baseContent += baseContent;
  }
  return baseContent;
}

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
    let blogId = props.match.params.blogId;
    let p = posts.filter(post => post.blogId == blogId);
    return <Posts blogId={blogId} posts={p} deletePost={deletePost} addPost={addPost} />
  }

  function readPost(props) {
    let p = posts.find(post => post.id == props.match.params.postId);
    console.log("Showing post: ", p);
    return <PostRead blogId={p.blogId} post={p} />
  }

  const postsByTag = ({ match }) => {
    let { blogId, tag } = match.params;
    console.log("Tag: ", blogId, tag);
    let p = posts.filter(post => post.blogId == blogId && post.tags.includes(tag));
    return <Posts blogId={blogId} posts={p} deletePost={deletePost} addPost={addPost} />
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
        <Route path="/posts/:postId/read" render={readPost} />
        <Route path="/posts/:blogId/tags/:tag" render={postsByTag} />

      </div>
    </Router>
  );
}

export default App;
