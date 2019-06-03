import React, { useState, useEffect } from 'react';
import './index.css';

function Line({ onKeyUp, children }) {
  return (
    <div className="editor-line">
      <div contentEditable="true" className="line-command">#</div>
      <div onKeyPress={onKeyUp} className="line-content"
        contentEditable="true">{children}</div>
    </div>
  );
}

const defaultState = [
  { id: 1, command: "#", content: "Line 1" },
  { id: 2, command: "#", content: "Line 2" },
]
export default function Editor() {
  const [lines, setLines] = useState(defaultState);

  const onInput = (id, e) => {
    if (e.which != 13) return;
    e.preventDefault();
    let input = e.target.innerText;
    let updates = lines.map((line) => {
      if (line.id == id) {
        line.content = input;
      }
      return line;
    });
    let newLine = { id: lines.length, command: "", content: "todo" }
    setLines([...updates, newLine]);
  }

  let lineUI = lines.map((line) => {
    return <Line key={line.id} onKeyUp={onInput.bind(this, line.id)}>
      {line.content}
    </Line>
  })

  return (
    <div className="editor-wrapper">
      {lineUI}
    </div>
  )
}
