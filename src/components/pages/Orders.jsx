import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

import Card from '../Card';

const Orders = () => {
  const { orderItems } = useContext(AppContext);

  return (
    <div className='content'>
      <div className='contentHeader d-flex justify-between'>
        <h1>
          <Link to={'/'}>
            <button>
              <img src='/img/favorite-arrow.svg' alt='' />
            </button>
          </Link>
          Мои покупки
        </h1>
      </div>
      <div className='cards d-flex flex-wrap'>
        {orderItems && orderItems.map((item) => <Card key={`${item.title}_${item.index}`} {...item} />)}
      </div>
    </div>
  );
};

export default Orders;
