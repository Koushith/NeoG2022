/**
 * Create a button and increment a counter every time that button is clicked. Using the syntax shown above, log the counter on console after every render.
 */

import { useEffect, useState } from 'react';

export const ButtonCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('running after renders', count);
  });
  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
};
