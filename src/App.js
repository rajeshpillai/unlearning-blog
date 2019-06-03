import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Blogs from './features/blogs'
import BlogForm from './features/blogs/blog-form'
import Posts from './features/posts';
import PostRead from './features/posts/post-read';
import PostEdit from './features/posts/post-edit';
import Categories from './features/categories';
import AppContext from './context/app-context';

import './App.css';
import { unlink } from 'fs';

const initCategories = [
  "Programming",
  "Web Development"
]
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
    id: 1, blogId: 1, title: "CSharp Tutorial", category: "Programming",
    content: generateContent(3),
    tags: ["csharp", "programming", "microsoft"],
    rating: 4,
    comments: [
      { id: 1, postId: 1, author: "rajesh", content: "Nice",commentedOn:new Date() },
      { id: 2, postId: 1, author: "jai", content: "Hi", commentedOn: new Date() },
    ]
  },
  {
    id: 2, blogId: 1, title: "Learn ES6", category: "Web Development",
    content: generateContent(3),
    tags: ["javascript", "es5", "es6"],
    rating: 5,
  },
  {
    id: 3, blogId: 1, title: "Learn JavaScript", category: "Web Development",
    content: generateContent(3),
    tags: ["javascript"],
    rating: 2,
  }
]

function generateContent(words) {
  let content = "";
  let uol = `
      Unordered
    + Create a list by starting a line with + ,  - , or  * 
    + Sub-lists are made by indenting 2 spaces:
      - Marker character change forces new list start:
        * Ac tristique libero volutpat at
        + Facilisis in pretium nisl aliquet
        - Nulla volutpat aliquam velit
    + Very easy!\r\n
  `;

  let ol = `
      Ordered

      1. Lorem ipsum dolor sit amet
      2. Consectetur adipiscing elit
      3. Integer molestie lorem at massa
  `;

  for (let i = 0; i < words; i++) {
    let data = `# Heading ${i}\r\n`;
    data += `## This is an <h2> tag\r\n`;
    data += `Contrary to **popular belief**, Lorem Ipsum is not simply random text.\r\n`;
    data += uol;
    data += ol;
    content += data;
  }
  return content;
}


function App() {
  const [blogs, setBlogs] = useState(initBlogs);
  const [posts, setPosts] = useState(initPosts);
  const [categories, setCategories] = useState(initCategories);
  const [blogId, setBlogId] = useState(null);

  const appState = {
    blogId: blogId,
    setBlogId: function (blogId) {
      this.blogId = blogId;
      setBlogId(blogId);
      console.log(`setting blogid to ${this.blogId}`);
    }
  }

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

  const onPostUpdate = (blogId, postId, content) => {
    let updatedPosts = posts.map((p) => {
      if (p.id == postId && p.blogId == blogId) {
        p.content = content;
      }
      return p;
    })
    console.log("update: ", updatedPosts);
    setPosts(updatedPosts);
  }


  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id))
  }

  useEffect(() => {

  }, [])

  function loadBlog() {
    return <>
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
    let blogId = Number(props.match.params.blogId);
    let p = posts.filter(post => post.blogId === blogId);
    return <Posts blogId={blogId} posts={p} deletePost={deletePost} addPost={addPost} />
  }

  function readPost(props) {
    let postId = Number(props.match.params.postId);
    let p = posts.find(post => post.id === postId);
    console.log("Showing post: ", p);
    return <PostRead blogId={p.blogId} post={p} />
  }

  function editPost(props) {
    let postId = Number(props.match.params.postId);
    let p = posts.find(post => post.id === postId);
    return <PostEdit updatePost={onPostUpdate} blogId={p.blogId} post={p} />
  }

  const postsByTag = ({ match }) => {
    let { blogId, tag } = match.params;
    console.log("Tag: ", blogId, tag);
    let p = posts.filter(post => post.blogId == blogId && post.tags.includes(tag));
    return <Posts blogId={blogId} posts={p} deletePost={deletePost} addPost={addPost} />
  }


  const postsByCategories = ({ match }) => {
    let { blogId, category } = match.params;
    console.log("Categories: ", blogId, category);
    let p = posts.filter(post => post.blogId == blogId && post.category.toLowerCase() == category);
    console.log("PostByCategory: ", p);
    return <Posts blogId={blogId} posts={p} deletePost={deletePost} addPost={addPost} />
  }

  return (
    <Router>
      <AppContext.Provider value={appState}>
        <div className="app">
          <header className="app-header">
            <p>Unlearning Labs</p>
            <Link to="/">Blogs</Link>
          </header>
          <div className="content-wrapper">
            {appState.blogId && <Categories categories={categories} />}
            <div className="content-area">
              <Route exact path="/" render={loadBlog} />
              <Route path="/blog-form" render={loadBlogForm} />
              <Route path="/blogs/:blogId/posts" render={loadPosts} />
              <Route path="/posts/:postId/read" render={readPost} />
              <Route path="/posts/:postId/edit" render={editPost} />
              <Route path="/posts/:blogId/tags/:tag" render={postsByTag} />
              <Route path="/posts/:blogId/categories/:category" render={postsByCategories} />
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
