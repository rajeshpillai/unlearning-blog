import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';


export default function Categories({ categories }) {
  let categoryView = categories.map((category) => {
    return (
      <h4 key={category}>{category}</h4>
    )
  })

  return (
    <div className="categories">
      {categoryView}
    </div>
  )
}