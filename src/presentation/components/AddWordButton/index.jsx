import React, { useState } from 'react';
import '../../../assets/global.scss';

function AddWord() {
  const [addingWord, setAddingWords] = useState(false);

  const [word, setWord] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');

  const handleAddWord = () => {
    setAddingWords(true);
  };

  const handleSaveWord = () => {
    setWord(word);
    setTranscription(transcription);
    setTranslation(translation);

    console.log('Добавлено слово: ', {
      word,
      transcription,
      translation,
    });

    setAddingWords(false);
    setWord('');
    setTranscription('');
    setTranslation('');
  };

  return (
    <div>
      {addingWord ? (
        <div>
          <input
            type="text"
            placeholder="Слово"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <input
            type="text"
            placeholder="Транскрипция"
            value={transcription}
            onChange={(e) => setTranscription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Перевод"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />
          <button className="button-style" onClick={handleSaveWord}>
            Сохранить слово
          </button>
          <button
            className="button-style"
            onClick={(e) => setAddingWords(false)}
          >
            Не сохранять
          </button>
        </div>
      ) : (
        <button className="button-style" onClick={handleAddWord}>
          Добавить слово
        </button>
      )}
    </div>
  );
}

export { AddWord };
