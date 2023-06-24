import React, { useState, useRef } from 'react';
import './style.css';

export default function (props) {
  const [height, setHeight] = useState('0px');
  const [icon, setIcon] = useState('+');
  const content = useRef(null);
  function toggleContent() {
    setHeight(height === '0px' ? `${content.current.scrollHeight}px` : `0px`);
    setIcon(height === '0px' ? `-` : `+`);
  }
  return (
    <div className="container">
      <button className="accordion" onClick={toggleContent}>
        {props.title}
        <span className="icon">{icon}</span>
      </button>
      <div
        className="accordion-content"
        style={{ maxHeight: `${height}` }}
        ref={content}
      >
        {props.content}
      </div>
    </div>
  );
}
