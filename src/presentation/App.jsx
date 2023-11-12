import React from 'react';
import '../assets/global.scss';
import { WordTableRow } from './components/WordTableRow';
import { words } from '../assets/data';
import Gallery from './components/CardGallery';
import { AddWord } from './components/AddWordButton';

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
      <AddWord />
    </div>
  );
}

export { App };
