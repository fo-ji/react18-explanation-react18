import React, { FC, useDeferredValue } from 'react';
import type { Task } from './Transition';

interface TaskListProps {
  taskList: Task[];
}

export const TaskLIst: FC<TaskListProps> = ({ taskList }) => {
  const deferredTaskList = useDeferredValue(taskList);
  return (
    <>
      {deferredTaskList.map((task) => (
        <div
          key={task.id}
          style={{
            width: 300,
            margin: 'auto',
            background: 'lavender',
          }}
        >
          <p>タイトル：{task.title}</p>
          <p>担当：{task.assignee}</p>
        </div>
      ))}
    </>
  );
};
