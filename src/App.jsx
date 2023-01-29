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

  React.useEffect(() => {
    axios.get('https://63d359f28d4e68c14ea99e54.mockapi.io/items').then(({ data }) => {
      setSneakers(data);
    });
    axios.get('https://63d359f28d4e68c14ea99e54.mockapi.io/cart').then(({ data }) => {
      setCartItems(data);
    });
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
        <Drawer
          items={cartItems}
          removeItem={removeFromCart}
          onClose={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path='/favorite'
          element={
            <Favorite
              items={favoriteItems}
              removeFromFavorite={(title) => removeFromFavorite(title)}
            />
          }
        />
      </Routes>

      <Routes>
        <Route path='/orders' element={<Orders />} />
      </Routes>

      <Routes>
        <Route
          path='/'
          element={
            <Home
              sneakers={sneakers}
              onAddToFavorite={onAddToFavorite}
              removeFromFavorite={removeFromFavorite}
              setCartItems={setCartItems}
              removeFromCart={removeFromCart}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
