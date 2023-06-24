import React from 'react';
import './style.css';
import Accordion from './Accordion.tsx';

export default function App() {
  return (
    <div>
      <h2>Accordion</h2>
      <Accordion
        title={'This is First Accordion'}
        content={
          'This is Message for Accordion which will colose and open accoding to user actions'
        }
      />
    </div>
  );
}
