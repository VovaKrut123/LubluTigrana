import React, { useState } from 'react';
import TodoItem from './TodoItem';
import EditPanel from './EditPanel';
import FilterSortPanel from './FilterSortPanel';

const TodoList = ({ todos, addTodo, deleteTodo, toggleTodo }) => {
  const [filter, setFilter] = useState('all'); // состояние для фильтрации (все, выполненные, невыполненные)

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'uncompleted') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="todo-list">
      <EditPanel addTodo={addTodo} />
      <FilterSortPanel setFilter={setFilter} />
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;