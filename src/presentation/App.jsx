import React from 'react';
import '../assets/global.scss';
// import { List } from './components/WordList';
import { WordTable } from './components/WordList';
import { words } from '../assets/data';

function App() {
  return (
    <div>
      {words.map((word, index) => (
        <WordTable key={index} {...word}></WordTable>
      ))}
    </div>
  );
}

export { App };
