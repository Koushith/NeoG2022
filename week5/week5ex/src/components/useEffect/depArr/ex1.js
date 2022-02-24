/**
 * ex01: make your counter print console only once#
challenge#
Use the useEffect dependency array to control how many times it is logged. Log it only once and say, "Hey! This is the initial value of Counter: { counter }". Make sure that it doesn't run on every render.
 */

import { useEffect, useState } from 'react';

export const LogCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Hey! This is the initial value of Counter: ${count}`);
  }, []);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </>
  );
};
