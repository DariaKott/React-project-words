import React from 'react';
import './styles.scss';

function WordCard(props) {
  return (
    <div className="card">
      <div className="word">{props.english}</div>
      <div className="word">{props.transcription}</div>
      <div className="word">{props.russian}</div>
      <div className="word">{props.tags}</div>
    </div>
  );
}

export { WordCard };
