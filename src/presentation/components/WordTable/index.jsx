import React, { useState } from 'react';
import { WordTableRow } from '../WordTableRow';
import { words } from '../../../assets/data';
import './styles.scss';

function WordTable(props) {
  return (
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
  );
}

export { WordTable };
