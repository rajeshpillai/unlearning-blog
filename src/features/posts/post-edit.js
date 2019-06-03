import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '../../components/editor';
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';

export default function PostEdit(props) {
  let { post, blogId, updatePost } = props;

  let contentRef = React.createRef();

  let currentValue = post.content;

  let tagsUI = post.tags.map((tag) => {
    return <Link to={`/posts/${blogId}/tags/${tag}?blogId=${blogId}`} key={tag} className="tag" > {tag}</Link >
  });

  function onUpdatePost(e) {
    e.preventDefault();
    updatePost(blogId, post.id, currentValue);
  }

  function onChange(newValue) {
    console.log('change', newValue);
    currentValue = newValue;
  }

  return (
    <div>
      <Link to={`/blogs/${blogId}/posts`}>Back to posts</Link>
      <button type="submit" onClick={onUpdatePost}>SUBMIT</button>
      <h2>{post.title} ${tagsUI}</h2>
      <div id="editor">
        <AceEditor
          width="calc(100% - 80px)"
          fontSize="16px"
          height="100vh"
          ref={contentRef}
          value={post.content}
          mode="markdown"
          theme="github"
          onChange={onChange}
          name="editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    </div>
  )
}