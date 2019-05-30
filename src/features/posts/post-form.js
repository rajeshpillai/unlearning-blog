import React, { useState } from 'react';


export default function PostForm(props) {
  const initialFormState = { id: null, blogId: null, title: "" }
  const [post, setPost] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target

    setPost({ ...post, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!post.title) return
        props.addPost(post)
        setPost(initialFormState)
      }}
    >
      <label>Title</label>
      <input type="text" name="title" value={post.title} onChange={handleInputChange} />
      <label>Blog</label>
      <input type="text" name="blogId" value={post.desc} onChange={handleInputChange} />
      <button>Add new post</button>
    </form>
  )

}