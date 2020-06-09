import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onToggle, onDelete}) => {

  const getItems = () => {
    return todos.map((todo, idx) => {
      return <TodoListItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id} />
    });
  };

  return (
    <ul className="todo-list">
      {getItems()}
    </ul>
  );
};

export default TodoList;