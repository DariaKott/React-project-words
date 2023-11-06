import React from 'react';
import '../assets/global.scss';
import { WordTableRow } from './components/WordList';
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
          {words.map((word) => (
            <WordTableRow key={word.id} {...word} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { App };
