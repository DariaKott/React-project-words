import React, { useState } from 'react';
import { WordCard } from '../WordCard';
import { words } from '../../../assets/data';
import './styles.scss';

function Gallery() {
  const [count, setCount] = useState(0);

  const nextCard = () => {
    if (count < words.length - 1) {
      setCount(count + 1);
    } else {
      // Если достигнут конец массива, переходим к первой карточке
      setCount(0);
    }
  };

  const previousCard = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      // Если достигнуто начало массива, переходим к последней карточке
      setCount(words.length - 1);
    }
  };

  return (
    <div className="gallery_container">
      <button onClick={previousCard}>{'<'}</button>
      <WordCard key={words[count].id} {...words[count]} />
      <button onClick={nextCard}>{'>'}</button>
    </div>
  );
}

export default Gallery;
