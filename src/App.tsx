import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { IItem } from './types/todo';

const App: React.FC = () => {
  // const todos = [{ id: 1, title: 'text' }];
  const [todos, setTodos] = useState<IItem[]>([]);

  function todoAddHandler(todo: IItem) {
    setTodos(prevTodos => {
      return [...prevTodos, { id: Math.random(), title: todo.title }];
    });
  }

  function todoRemoveHandler(id: number): void {
    setTodos(prevTodos => {
      return prevTodos.filter(item => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="App">
      <AddTodo onAddTodo={todoAddHandler} />
      <TodoList onRemoveTodo={todoRemoveHandler} todos={todos} />
    </div>
  );
};

export default App;
