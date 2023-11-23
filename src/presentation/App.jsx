import React from 'react';
import '../assets/global.scss';
import { WordTableRow } from './components/WordTableRow';
import { words } from '../assets/data';
import Gallery from './components/CardGallery';
import { AddWord } from './components/AddWordButton';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <h1>Учим слова</h1>
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
      <Footer />
    </div>
  );
}

export { App };
