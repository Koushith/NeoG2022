/**
 *
 */

import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

export const WishList = () => {
  const [wishText, setWishText] = useState('');
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    localStorage.setItem('wishlistsss', JSON.stringify(wishList));
  });

  const handleWishAdd = () => {
    setWishList([
      ...wishList,
      {
        id: uuid(),
        wish: wishText,
      },
    ]);
    setWishText('');
  };

  const handleWishInput = (event) => setWishText(event.target.value);

  return (
    <div>
      <input onChange={handleWishInput} value={wishText} placeholder={'I wish...'} />
      <button onClick={handleWishAdd}>Add </button>
      <ul>{wishList && wishList.map(({ id, wish }) => <li key={id}> {wish} </li>)}</ul>
    </div>
  );
};
