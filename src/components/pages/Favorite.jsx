import { Link } from 'react-router-dom';

import Card from '../Card';

const Favorite = ({ items, removeFromFavorite, removeFromCart }) => {
  return (
    <div className='content'>
      <div className='contentHeader d-flex justify-between mb-30'>
        <h1>
          <Link to={'/'}>
            <button>
              <img src='/img/favorite-arrow.svg' alt='' />
            </button>
          </Link>
          Мои закладки
        </h1>
      </div>
      <div className='cards d-flex flex-wrap'>
        {items &&
          items.map((item) => (
            <Card
              key={`${item.title}_${item.index}`}
              {...item}
              isLiked
              removeFromFavorite={(title) => removeFromFavorite(title)}
              removeFromCart={removeFromCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Favorite;
