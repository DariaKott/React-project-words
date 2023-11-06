import React from 'react';
import './styles.scss';

function WordTableRow(props) {
  return (
    <tr>
      <td>{props.english}</td>
      <td>{props.transcription}</td>
      <td>{props.russian}</td>
      <td>{props.tags}</td>
    </tr>
  );
}

export { WordTableRow };
