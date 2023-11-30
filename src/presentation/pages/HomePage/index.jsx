import React from 'react';
import { WordTable } from '../../components/WordTable';
import { AddWord } from '../../components/AddWordButton';

function HomePage() {
  return (
    <div>
      <WordTable />
      <AddWord />
    </div>
  );
}

export { HomePage };
