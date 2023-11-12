import React, { useState } from 'react';
import './styles.scss';
import '../../../assets/global.scss';

function WordTableRow(props) {
  //   return (
  //     <tr>
  //       <td>{props.english}</td>
  //       <td>{props.transcription}</td>
  //       <td>{props.russian}</td>
  //       <td>{props.tags}</td>
  //     </tr>
  //   );
  // }
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Сохранение изменений и отправка на сервер (если необходимо)
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    // console.log(event.target.value); // Вывести значение в консоль
    console.log('что-то поменялось');
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={props.english}
            onChange={handleInputChange}
          />
        ) : (
          props.english
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={props.transcription}
            onChange={handleInputChange}
          />
        ) : (
          props.transcription
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={props.russian}
            onChange={handleInputChange}
          />
        ) : (
          props.russian
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" value={props.tags} onChange={handleInputChange} />
        ) : (
          props.tags
        )}
      </td>
      <td>
        {isEditing ? (
          <button className="button-style" onClick={handleSaveClick}>
            Сохранить
          </button>
        ) : (
          <button className="button-style" onClick={handleEditClick}>
            Редактировать
          </button>
        )}
      </td>
    </tr>
  );
}

export { WordTableRow };
