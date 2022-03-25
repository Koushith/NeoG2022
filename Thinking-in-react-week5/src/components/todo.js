import { useState } from 'react';
import uuid from 'react-uuid';

export const Todo = () => {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([
    {
      task: 'cleaning',
      isCompleted: false,
      id: uuid(),
    },
    {
      task: 'washiing',
      isCompleted: false,
      id: uuid(),
    },
    {
      task: 'sdsfkj',
      isCompleted: false,
      id: uuid(),
    },
  ]);

  const handelSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, { task: input, isCompleted: false, id: uuid() }]);
    setInput('');
  };

  const deleteItem = (id) => {
    const removeItem = todo.filter((todo) => {
      return todo.id !== id;
    });
    setTodo(removeItem);
  };
  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handelSubmit}>
        <input type='text' placeholder='enter' value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
      <h3>All Todos</h3>
      <ul>
        {todo.map((todoList) => (
          <li key={todoList.id}>
            <p>{todoList.task}</p>
            <button>Edit</button>
            <button onClick={deleteItem(todoList.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
