import React from 'react';

import Card from '../Card';

const Home = ({ sneakers, cartItems, favoriteItems, loading }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const renderItems = () => {
    const filterItems = sneakers.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (loading ? [...Array(8)] : filterItems).map((items, index) => (
      <Card
        key={index}
        added={cartItems.some((obj) => obj.title === items.title)}
        isLiked={favoriteItems.some((obj) => obj.title === items.title)}
        loading={loading}
        {...items}
      />
    ));
  };

  return (
    <div className='content'>
      <div className='contentHeader d-flex justify-between'>
        <h1>{searchValue ? `Поиск по: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className='searchBlock d-flex align-center'>
          <img className='mr-10 ml-15' src='/img/search.svg' alt='search' />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className='removeBtn'
              src='/img/delete-cart.svg'
              alt='Delete'
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} type='text' placeholder='Поиск...' />
        </div>
      </div>
      <div className='cards d-flex flex-wrap'>{renderItems()}</div>
    </div>
  );
};

export default Home;
