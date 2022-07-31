import React, { useState } from 'react';
import { IItem } from '../types/todo';

type OnlyTitle = Pick<IItem, 'title'>;

const AddTodo: React.FC = () => {
  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});

  function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    titleTodo({ title: e.target.value });
  }
  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (!todo.title) {
      return;
    }

    console.log(todo.title);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add Title</span>
        <input type="text" id="add-todo" onChange={titleHandler} />
      </div>
      <button type="submit">Add todos</button>
    </form>
  );
};

export default AddTodo;
