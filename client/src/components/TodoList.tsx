import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface Todo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async () => {
  const { data } = await axios.get<Todo[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );
  return data;
};

export const TodoList = () => {
  const { data } = useQuery<Todo[]>(['todos'], fetchTodos);
  return (
    <div
      style={{
        height: 300,
        border: '2px solid gray',
        background: 'mistyrose',
        overflowY: 'scroll',
      }}
    >
      <h2>TODO</h2>
      {data?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
