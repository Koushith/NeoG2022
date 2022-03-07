/**
 * ex1: character counter (Twitter)#
See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.
 */

import { useState } from 'react';

export const CharaterCounter = () => {
  const [tweet, setTweet] = useState('');
  const [percentage, setPercentage] = useState(0);

  console.log('tweets', tweet);
  console.log(percentage);

  const textAreaHandler = (e) => {
    setTweet(e.target.value);

    let length = tweet.length;
    let per = (length / 160) * 100;

    length > 0 ? setPercentage(Math.ceil(per)) : setPercentage(0);
    if (tweet === '') {
      setPercentage(0);
    }
  };
  return (
    <>
      <textarea
        rowSpan={10}
        placeholder='enter your tweet in 280 char'
        value={tweet}
        onChange={textAreaHandler}
        maxLength={160}
      />
      <p>
        <span style={{ color: percentage === 100 ? 'red' : 'gray' }}>{tweet.length}</span>/160
      </p>
      <span>{percentage}%</span>

      <p>{tweet}</p>
      {percentage === 100 && <p>you have exceeded the charater length of 160</p>}
    </>
  );
};
