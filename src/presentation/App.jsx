import React from 'react';
import '../assets/global.scss';
// import { List } from './components/WordList';
import { WordTable } from './components/WordList';
import { words } from '../assets/data';

function App() {
  return (
    <div>
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

export { App };
