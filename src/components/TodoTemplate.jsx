import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
  return (
    <div className="TodoTemplate">
      <h1 className="app-title">일정 관리</h1>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;