import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Функция для добавления нового элемента в список
  const addTodo = (todoText) => {
    setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
  };

  // Функция для удаления элемента из списка
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Функция для изменения статуса выполнения элемента
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoList
        todos={todos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <Footer />
    </div>
  );
};

export default App;