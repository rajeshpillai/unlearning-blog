import React, { useState, useEffect, useContext } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import PostForm from "./post-form";
import AppContext from "../../context/app-context";
import PostRead from "./post-read";
import PostEdit from "./post-edit"; //"./features/posts/post-edit";

import "./post.css";

export default function Posts({
  posts,
  blogId,
  addPost,
  deletePost,
  onPostUpdate
}) {
  const appContext = useContext(AppContext);

  useEffect(() => {
    appContext.setBlogId(blogId);
    console.log(`setting blogid to ${blogId}`);
  }, [appContext, blogId]);

  let postView = posts.map(post => {
    return (
      <div className="post" key={post.id}>
        <h2>{post.title}</h2>
        <div>{post.desc}</div>
        <div>Category: {post.category}</div>

        <NavLink to={`/posts/${post.id}/read`}>Read more..</NavLink>
        <NavLink to={`/posts/${post.id}/edit`}>
          <button>EDIT</button>
        </NavLink>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
    );
  });

  function loadPostForm() {
    return <PostForm addPost={addPost} />;
  }

  function readPost(props) {
    let postId = Number(props.match.params.postId);
    let p = posts.find(post => post.id === postId);
    console.log("Showing post: ", p);
    return <PostRead blogId={p.blogId} post={p} />;
  }

  function editPost(props) {
    let postId = Number(props.match.params.postId);
    console.log(`editing post with id ${postId}`);
    let p = posts.find(post => post.id === postId);
    return <PostEdit updatePost={onPostUpdate} blogId={p.blogId} post={p} />;
  }

  const postsByTag = ({ match }) => {
    let { blogId, tag } = match.params;
    console.log("Tag: ", blogId, tag);
    let p = posts.filter(
      post => post.blogId == blogId && post.tags.includes(tag)
    );
    {
      /* <Posts
        blogId={blogId}
        posts={p}
        deletePost={deletePost}
        addPost={addPost}
      /> */
    }
    return <h2>Todo</h2>;
  };

  return (
    <Router>
      <Route path="/blogs/:blogId/posts/new" render={loadPostForm} />
      <Route path="/posts/:postId/read" render={readPost} />
      <Route path="/posts/:postId/edit" render={editPost} />
      <Route path="/posts/:blogId/tags/:tag" render={postsByTag} />

      <NavLink to={`/blogs/${blogId}/posts`}>ALL POSTS</NavLink>
      <NavLink to={`/blogs/${blogId}/posts/new`}>
        <span title="new post" className="btn btn-round">
          +
        </span>
      </NavLink>
      {postView}
    </Router>
  );
}
