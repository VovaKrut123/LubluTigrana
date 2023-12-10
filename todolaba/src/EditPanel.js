import React, { useState } from 'react';

const EditPanel = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <div className="edit-panel">
      <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Введите задачу..."
      />
      <button onClick={handleAddTodo}>Добавить</button>
    </div>
  );
};

export default EditPanel;