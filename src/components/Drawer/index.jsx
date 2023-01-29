import axios from 'axios';
import React from 'react';
import { AppContext } from '../../App';
import Info from '../Info';

import Card from './Card';

import {
  overlay,
  drawer,
  removeBtn,
  cartTotalBlock,
  greenButton,
  overlayVisible,
} from './Drawer.module.scss';

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const Drawer = ({ onClose, items, isOpened }) => {
  const [isBought, setIsBought] = React.useState(false);
  const { setCartItems, cartItems, setOrderItems } = React.useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickBuy = async () => {
    try {
      setIsBought(true);
      setOrderItems(cartItems);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://63d359f28d4e68c14ea99e54.mockapi.io/cart/${item.id}`);
        delay();
      }
    } catch (error) {
      alert('Не удалось создать заказ');
    }
  };

  return (
    <div className={`${overlay} ${isOpened ? overlayVisible : ''}`}>
      <div className={drawer}>
        <h2 className='d-flex justify-between mr-30'>
          Корзина <img className={removeBtn} onClick={onClose} src='/img/delete-cart.svg' alt='Delete' />
        </h2>
        {items.length > 0 ? (
          <>
            <div className={cartItems}>
              {items && items.map((obj) => <Card key={obj.title} {...obj} />)}
            </div>
            <div className={cartTotalBlock}>
              <ul>
                <li className='mb-20'>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.round(totalPrice * 0.05)} руб.</b>
                </li>
              </ul>
              <button onClick={onClickBuy} className={greenButton}>
                <span>Оформить заказ</span>
                <svg
                  width='16'
                  height='14'
                  viewBox='0 0 16 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M1 7H14.7143'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8.71436 1L14.7144 7L8.71436 13'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isBought ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isBought
                ? //instead of 1 should be the id after sending to the backend
                  'Ваш заказ #1 скоро будет передан курьерской доставке'
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isBought ? '/img/order-complete.jpg' : '/img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
