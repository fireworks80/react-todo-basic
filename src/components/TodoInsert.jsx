import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [input, setInput] = useState('');

  const onChangeInput = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    onInsert(input);
    setInput('');
  });

  return (
    <form className="todo-insert" onSubmit={e => onSubmit(e)}>
      <input type="text" value={input} onChange={onChangeInput} placeholder="할 일 입력" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
