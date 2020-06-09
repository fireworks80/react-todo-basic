import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    }
  ]);

  const id = useRef(todos.length + 1);

  const onInsert = useCallback((value) => {
    setTodos(todos.concat({
      id: id.current,
      text: value,
      checked: false
    }));

    id.current += 1;
  }, [todos]);

  const onToggle = useCallback((id) => {
    const newTodos = todos.map((todo, idx) => {
      return todo.id === id ? {...todo, checked: !todo.checked } : todo;
    })
    
    setTodos(newTodos);

  }, [todos]);

  const onDelete = useCallback((id) => {
    // console.log(id);
    const newTodos = todos.filter((todo, idx) => todo.id !== id);
    setTodos(newTodos);
  }, [todos]);

  return (<TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
  </TodoTemplate>);
}

export default App;
