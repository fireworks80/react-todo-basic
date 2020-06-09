import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classname';

const TodoListItem = ({todo, onToggle, onDelete}) => {
  const {text, checked} = todo;

  const onHandleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="todo-list-item">
      <div className={cn('checkbox', {checked})} onClick={() => onToggle(todo.id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <p className="text">{text}</p>
      </div>
      <button type="button" className="remove" onClick={onHandleDelete}>
        <MdRemoveCircleOutline />
      </button>
    </li>
  );
};

export default TodoListItem;