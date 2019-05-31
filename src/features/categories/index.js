import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/app-context';


export default function Categories({ categories }) {
  const appContext = useContext(AppContext);
  console.log("Categories: ", appContext);

  let categoryView = categories.map((category) => {
    return (
      <Link to={`/posts/${appContext.blogId}/categories/${category.toLowerCase()}`} key={category}>
        <h4>{category}</h4></Link>
    )
  })

  return (
    <div className="categories">
      {categoryView}
    </div>
  )
}