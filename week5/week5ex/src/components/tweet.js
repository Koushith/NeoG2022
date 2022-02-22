/**
 * ex1: character counter (Twitter)#
See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.
 */

import { useState } from 'react';

export const Tweet = () => {
  const [tweet, setTweet] = useState('');
  const [charLeft, setCharLeft] = useState(160);
  const [charExceeded, setCharExceeded] = useState(false);

  const tweetCount = (e) => {
    setTweet(e.target.value);
    setCharLeft(charLeft - tweet.length);

    if (charLeft > 160) {
      setCharExceeded(true);
    }
  };
  return (
    <>
      <textarea rowSpan={10} placeholder='enter your tweet in 280 char' value={tweet} onChange={tweetCount} />
      <p>Total char left is {charLeft}</p>

      {tweet}
    </>
  );
};
