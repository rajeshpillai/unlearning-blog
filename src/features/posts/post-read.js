import React, { useState } from 'react';


export default function PostRead({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <div>{post.desc}</div>
    </div>
  )

}