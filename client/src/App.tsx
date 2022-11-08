import React, { Suspense } from 'react';
import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';
import { ReactQuery } from './components/ReactQuery';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      <ErrorBoundary fallback={<p>All error!</p>}>
        <Suspense fallback={<p>All loading..</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
