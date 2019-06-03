import React from 'react';
import { Link } from 'react-router-dom';
import Editor from '../../components/editor';

export default function PostEdit(props) {
  let { post, blogId, updatePost } = props;

  let contentRef = React.createRef();

  let tagsUI = post.tags.map((tag) => {
    return <Link to={`/posts/${blogId}/tags/${tag}?blogId=${blogId}`} key={tag} className="tag" > {tag}</Link >
  });

  function onUpdatePost(e) {
    e.preventDefault();
    updatePost(blogId, post.id, contentRef.current.value);
  }

  return (
    <div>
      <Link to={`/blogs/${blogId}/posts`}>Back to posts</Link>
      <button type="submit" onClick={onUpdatePost}>SUBMIT</button>
      <h2>{post.title} ${tagsUI}</h2>
      <textarea ref={contentRef} rows="30" cols="120">{post.content}</textarea>
    </div>
  )
}