/**
 * ex2: password match#
Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.
 */

import { useState, useRef } from 'react';

export const PasswordMatch = () => {
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [match, setMatch] = useState(false);

  const pass1 = useRef();
  const pass2 = useRef();

  console.log('Pass1', pass1);
  console.log('Pass2', pass2);
  // const submitHandler = () => {
  //   if (password === reEnterPassword) {
  //     setMatch(true);
  //   } else {
  //     alert('Password do not match');
  //   }
  // };
  const submitHandler = () => {
    if (pass1.current.value !== pass2.current.value) {
      setMatch(false);
    } else {
      setMatch(true);
      alert('MAtched');
    }
  };
  return (
    <>
      <input
        type='password'
        placeholder='enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ref={pass1}
      />

      <input
        type='password'
        placeholder='reenter password'
        value={reEnterPassword}
        onChange={(e) => setReEnterPassword(e.target.value)}
        ref={pass2}
      />
      {!match && <p>Passwords donot match</p>}

      <button onClick={submitHandler} disabled={match}>
        Submit
      </button>
    </>
  );
};
