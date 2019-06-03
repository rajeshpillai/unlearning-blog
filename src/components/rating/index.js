import React from 'react';
import './rating.css';

export default function Rating({ value }) {
  function getRating() {
    let ui = []
    for (let i = 0; i < value; i++) {
      ui.push(<span className="rating-item">*</span>)
    }
    return ui;
  }
  return (
    getRating()
  )
}