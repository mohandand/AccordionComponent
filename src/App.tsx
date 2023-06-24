import React from 'react';
import './style.css';
import Accordion from './Accordion.tsx';

export default function App() {
  let obj = [
    {
      title: 'This is First Accordion',
      content:
        'This is Message for Accordion which will colose and open accoding to user actions',
    },
    {
      title: 'This is Second Accordion',
      content:
        'This is Message for Accordion which will colose and open accoding to user actions',
    },
    {
      title: 'This is Third Accordion',
      content:
        'This is Message for Accordion which will colose and open accoding to user actions',
    },
    {
      title: 'This is Fourth Accordion',
      content:
        'This is Message for Accordion which will colose and open accoding to user actions',
    },
  ];
  return (
    <div>
      <h2>Accordion</h2>
      {obj.map((item) => {
        return <Accordion title={item.title} content={item.content} />;
      })}
    </div>
  );
}
