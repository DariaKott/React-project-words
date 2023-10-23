import React from 'react';
import './styles.scss';
// import { WordCard } from '../WordCard';
// import { words } from '../../../assets/data';

// function List() {
//   return (
//     <div className="list">
//       {words.map((word, index) => (
//         <WordCard key={index} {...word} />
//       ))}
//     </div>
//   );
// }

// export { List };

function WordTable(props) {
  return (
    <tr>
      <td>{props.english}</td>
      <td>{props.transcription}</td>
      <td>{props.russian}</td>
      <td>{props.tags}</td>
    </tr>
  );
}

export { WordTable };
