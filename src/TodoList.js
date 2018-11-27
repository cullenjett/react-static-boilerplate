import React, { Fragment, useState } from 'react';

export const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(oldTodos => [inputValue, ...oldTodos]);
    setInputValue('');
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Enter a todo</label>
        <input
          type="text"
          id="todo"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </Fragment>
  );
};
