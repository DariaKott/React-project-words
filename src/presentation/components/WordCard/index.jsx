import React from 'react';
import './styles.scss';

function WordCard(props) {

  return (
    <div className="card">
      <h2>{props.word}</h2>
      <p>{props.transcription}
      </p>
      <p>{props.meaning}
      </p>
      <p>{props.translation}
      </p>
      <p>{props.topic}
      </p>
    </div>
  );
}

export { WordCard };
