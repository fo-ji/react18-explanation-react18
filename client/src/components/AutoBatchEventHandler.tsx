import { useState } from 'react';

export const AutoBatchEventHandler = () => {
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);

  console.log('AutoBatchEventHandler Component');

  const onClickUpdateState = () => {
    console.log({ state1 });
    setState1((prev) => prev + 1);
    console.log({ state1 });
    setState2((prev) => prev + 1);
  };

  return (
    <div>
      <p> AutoBatchEventHandler</p>
      <button onClick={onClickUpdateState}>State Update!</button>
      <p>State1: {state1}</p>
      <p>State2: {state2}</p>
    </div>
  );
};
