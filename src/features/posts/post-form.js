import React, { useState, useContext } from 'react';
import AppContext from '../../context/app-context';

export default function PostForm(props) {
  const initialFormState = { id: null, blogId: null, title: "" }
  const [post, setPost] = useState(initialFormState);
  const appContext = useContext(AppContext);

  const handleInputChange = event => {
    const { name, value } = event.target

    setPost({ ...post, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!post.title) return
        post.blogId = appContext.blogId;
        props.addPost(post)
        setPost(initialFormState)
      }}
    >
      <label>Title</label>
      <input type="text" name="title" value={post.title} onChange={handleInputChange} />
      <label>Blog</label>
      <input type="text" name="content" value={post.content} onChange={handleInputChange} />
      <button>Add new post</button>
    </form>
  )

}