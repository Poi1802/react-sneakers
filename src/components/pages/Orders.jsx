import { Link } from 'react-router-dom';

const Orders = () => {
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
      <div className='cards d-flex flex-wrap'></div>
    </div>
  );
};

export default Orders;
