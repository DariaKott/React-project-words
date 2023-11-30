import React, { useState } from 'react';
import './styles.scss';

function WordCard(props) {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  const handleHideTranslation = () => {
    setShowTranslation(false);
  };

  return (
    <div className="card">
      <h3 className="word word_word">{props.english}</h3>
      <div className="word word_transcription">{props.transcription}</div>
      {showTranslation ? (
        <div>
          <div className="word word_translation">{props.russian}</div>
          <button className="button-style" onClick={handleHideTranslation}>
            Скрыть перевод
          </button>
        </div>
      ) : (
        <div>
          <div> </div>
          <br />
          <button className="button-style" onClick={handleShowTranslation}>
            Показать перевод
          </button>
        </div>
      )}
      <div className="word word_tags">{props.tags}</div>
    </div>
  );
}

export { WordCard };
