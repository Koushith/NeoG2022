import { useState } from 'react';

export const PasswordMatch = () => {
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');

  const [matched, setMatched] = useState(false);

  const initialPassowrd = (e) => {
    setPassword(e.target.value);
  };
  const reEnteredPassword = (e) => {
    setReEnterPassword(e.target.value);
  };

  return (
    <>
      <input type='password' placeholder='Enter your password' value={password} onChange={initialPassowrd} /> <br />
      <input
        type='password'
        placeholder='Re-enter your password'
        value={reEnterPassword}
        onChange={reEnteredPassword}
        style={{ border: `1px solid  ${matched ? 'green' : 'red'} ` }}
      />{' '}
      <br />
      {matched ? <p>Password Matched</p> : <p>Passoword not matched</p>}
      <br />
    </>
  );
};
