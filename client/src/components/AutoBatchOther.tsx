import { useState } from 'react';

interface Todo {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}

export const AutoBatchOther = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  console.log('AutoBatchOther component');

  const onClickExecuteApi = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      setTodos(data);
      setIsFinished(true);
    } catch (err) {
      throw new Error('fetch error');
    }
  };

  return (
    <div>
      <p>AutoBatchOther</p>
      <button onClick={onClickExecuteApi}>API実行</button>
      <p>isFinished: {isFinished ? 'true' : 'false'}</p>
      <div>
        {todos?.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    </div>
  );
};
