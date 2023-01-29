import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Drawer from './components/Drawer';
import Favorite from './components/pages/Favorite';
import Header from './components/Header';
import Home from './components/pages/Home';
import Orders from './components/pages/Orders';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [sneakers, setSneakers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://63d359f28d4e68c14ea99e54.mockapi.io/cart');
      const sneakersResponser = await axios.get('https://63d359f28d4e68c14ea99e54.mockapi.io/items');

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setSneakers(sneakersResponser.data);
    }

    fetchData();
  }, []);

  const onAddToFavorite = (obj) => {
    setFavoriteItems((prev) => [...prev, obj]);
  };

  const removeFromFavorite = (title) => {
    setFavoriteItems((prev) => prev.filter((item) => item.title !== title));
  };

  const onAddToCart = async (obj) => {
    try {
      const { data } = await axios.post('https://63d359f28d4e68c14ea99e54.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, data]);
    } catch (error) {
      alert('Error');
    }
  };

  const removeFromCart = (id) => {
    axios.delete(`https://63d359f28d4e68c14ea99e54.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className='wrapper clear'>
      {cartOpened && (
        <Drawer items={cartItems} removeItem={removeFromCart} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path='/favorite'
          element={
            <Favorite
              items={favoriteItems}
              sneakers={sneakers}
              cartItems={cartItems}
              removeFromFavorite={(title) => removeFromFavorite(title)}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path='/'
          element={
            <Home
              sneakers={sneakers}
              cartItems={cartItems}
              favoriteItems={favoriteItems}
              onAddToFavorite={onAddToFavorite}
              removeFromFavorite={removeFromFavorite}
              setCartItems={setCartItems}
              removeFromCart={removeFromCart}
              onAddToCart={onAddToCart}
              loading={isLoading}
            />
          }
        />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
