import React from 'react';
import './styles.scss';
import { WordCard } from '../WordCard';

function List() {
  return (
    <div>
      <h3>Тут будет список слов</h3>
      <WordCard word="solution" translation="решение"></WordCard>
    </div>
  );
}

export { List };
