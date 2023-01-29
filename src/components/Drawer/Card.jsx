import React from 'react';

import { AppContext } from '../../App';

import { card, removeBtn } from './Drawer.module.scss';

const Card = ({ title, imageUrl, price, id }) => {
  const { removeFromCart } = React.useContext(AppContext);

  const onClickRemove = () => {
    removeFromCart(title);
  };

  return (
    <div className={card}>
      <img className='ml-20 pb-10' width={70} height={70} src={imageUrl} alt='Sneakers' />
      <div className='mr-10 ml-20'>
        <p>{title}</p>
        <b>{price} руб.</b>
      </div>
      <img onClick={onClickRemove} className={removeBtn} src='/img/delete-cart.svg' alt='Delete' />
    </div>
  );
};

export default Card;
