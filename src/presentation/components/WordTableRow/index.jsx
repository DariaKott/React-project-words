import React, { useState } from 'react';
import './styles.scss';
import '../../../assets/global.scss';

function WordTableRow(props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Сохранение изменений и отправка на сервер (пока без сохранения)
    setIsEditing(false);
    console.log('что-то поменялось');
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
