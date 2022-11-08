import { useState, useTransition } from 'react';
import { Suspense } from 'react';
import { AlbumList } from './AlbumList';
import { Sidebar } from './Sidebar';
import { TodoList } from './TodoList';
import { ErrorBoundary } from 'react-error-boundary';

type Tabs = 'todo' | 'album';

export const ReactQuery = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>('todo');
  const [isPending, startTransition] = useTransition();

  const buttonStyle = {
    padding: 12,
    fontSize: 16,
    border: 'none',
    opacity: isPending ? 0.5 : 1,
  };

  const albumButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === 'album' ? 'royalblue' : 'white',
    color: selectedTab === 'album' ? 'white' : 'black',
  };

  const todoButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === 'todo' ? 'royalblue' : 'white',
    color: selectedTab === 'todo' ? 'white' : 'black',
  };

  const onClickTabButton = (tab: Tabs) => {
    startTransition(() => {
      setSelectedTab(tab);
    });
  };

  return (
    <div style={{ display: 'flex', padding: 16 }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <button
          style={todoButtonStyle}
          onClick={() => onClickTabButton('todo')}
        >
          Todo
        </button>
        <button
          style={albumButtonStyle}
          onClick={() => onClickTabButton('album')}
        >
          Album
        </button>

        <ErrorBoundary fallback={<p>Todo or Album error!</p>}>
          <Suspense fallback={<p>Todo or Album loading..</p>}>
            {selectedTab === 'todo' ? <TodoList /> : <AlbumList />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
