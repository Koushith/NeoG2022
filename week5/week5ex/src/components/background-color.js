import { useState } from 'react';

export const BackgroundColor = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <p style={{ color: toggle ? 'red' : 'green' }}>Text is in {toggle ? 'red' : 'green'}</p>
      <input type='checkbox' name='toggle' id='toggle' value={toggle} onChange={() => setToggle(!toggle)} />
    </div>
  );
};
