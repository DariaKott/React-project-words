import React from 'react';
import '../assets/global.scss';
import { WordTable } from './components/WordList';
import { words } from '../assets/data';
import Gallery from './components/CardGallery';

function App() {
  return (
    <div>
      <div>
        <Gallery />
      </div>
      <table className="word-table">
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Тема</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <WordTable key={index} {...word} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// WordCard {...words[1]}

export { App };
