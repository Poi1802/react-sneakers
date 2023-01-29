import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

const Header = ({ onClickCart }) => {
  const { cartItems } = React.useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className='d-flex justify-between p-45'>
      <Link to={'/'}>
        <div className='headerLeft d-flex align-center'>
          <img className='mr-15' width={40} height={40} src='/img/logo.png' alt='logo' />
          <div className='headerInfo'>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className='d-flex align-center'>
        <li className='cu-p mr-30' onClick={onClickCart}>
          <img className='mr-10' src='/img/cart.svg' alt='cart' />
          <span>{totalPrice} руб.</span>
        </li>
        <li className='mr-30'>
          <Link to={'/favorite'}>
            <img src='/img/favourite.svg' alt='' />
          </Link>
        </li>
        <li className='mr-20'>
          <Link to={'/orders'}>
            <img width={20} height={20} src='/img/user.svg' alt='user' />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
