import React from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../App';

import { card, favorite, button } from './Card.module.scss';

const Card = ({ id, title, price, imageUrl, loading, isLiked = false }) => {
  const { isItemAdded, onAddToCart, removeFromCart, removeFromFavorite, onAddToFavorite } =
    React.useContext(AppContext);
  const [liked, setLiked] = React.useState(isLiked);

  const onClickPlus = () => {
    if (isItemAdded(title) === false) {
      onAddToCart({ title, price, imageUrl });
    } else {
      removeFromCart(title);
    }
  };

  const onClickHeart = () => {
    setLiked(!liked);

    if (liked === false) {
      onAddToFavorite({ title, price, imageUrl, id });
    } else {
      removeFromFavorite(title);
    }
  };

  return (
    <div className={card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={260}
          height={260}
          viewBox='0 0 150 250'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'>
          <rect x='0' y='30' rx='10' ry='10' width='150' height='90' />
          <rect x='0' y='136' rx='5' ry='5' width='150' height='15' />
          <rect x='0' y='153' rx='5' ry='5' width='94' height='15' />
          <rect x='0' y='194' rx='8' ry='8' width='80' height='24' />
          <rect x='118' y='187' rx='8' ry='8' width='32' height='32' />
        </ContentLoader>
      ) : (
        <>
          <div className={favorite}>
            <img
              onClick={onClickHeart}
              src={liked ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
              alt='heart'
            />
          </div>
          <img className='mt-20' width={133} height={112} src={imageUrl} alt='sneakers' />
          <p>{title}</p>
          <div className='cardBuy d-flex mb-30'>
            <div className='price mr-40'>
              <span>Цена:</span>
              <br />
              <b>{price} руб.</b>
            </div>
            <img
              className={button}
              onClick={onClickPlus}
              src={isItemAdded(title) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
              alt=''
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
