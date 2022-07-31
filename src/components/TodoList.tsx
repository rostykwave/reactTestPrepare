interface IItem {
  id: number;
  title: string;
}

interface IProps {
  todos: IItem[];
}

const TodoList: React.FC<IProps> = props => {
  return (
    <ul>
      {props.todos.map(item => {
        return (
          <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
// import { Component } from 'react';

// interface IItem {
//   id: number;
//   title: string;
// }

// interface IProps {
//   todos: IItem[];
// }

// class TodoList extends Component<IProps> {
//   render() {
//     return null;
//   }
// }

// export default TodoList;
