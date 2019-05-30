import React, { useState } from 'react';


export default function BlogForm(props) {
  const initialFormState = { id: null, title: "", desc: "" }
  const [blog, setBlog] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target

    setBlog({ ...blog, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!blog.title) return
        props.addBlog(blog)
        setBlog(initialFormState)
      }}
    >
      <label>Title</label>
      <input type="text" name="title" value={blog.title} onChange={handleInputChange} />
      <label>Blog</label>
      <input type="text" name="desc" value={blog.desc} onChange={handleInputChange} />
      <button>Add new blog</button>
    </form>
  )

}