/**
 * ex02: predict the output and order#
challenge#
What will be the console for the initial render?
What will be the console after user clicks increment button?
 */

import { useEffect, useState } from 'react';

export default function OutPut() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('from useEffect...', counter);
  });

  function incrementClickHandler() {
    setCounter((counter) => {
      console.log('from click handler...', counter);
      return counter + 1;
    });
  }

  console.log('before render...', counter);
  return (
    <div className='App'>
      <h1>{counter} </h1>
      <button onClick={incrementClickHandler}>Increment </button>
    </div>
  );
}

/**
 * before render... - 0
 * from useEffect...- 0
 *
 * 'from click handler...', 1
 * before useEffect...- 1
 * from useEffect...- 1
 */
