import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Drawer from './components/Drawer';
import Favorite from './components/pages/Favorite';
import Header from './components/Header';
import Home from './components/pages/Home';
import Orders from './components/pages/Orders';

export const AppContext = React.createContext({});

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [orderItems, setOrderItems] = React.useState([]);
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
      setCartItems((prev) => [...prev, obj]);
      const { data } = await axios.post('https://63d359f28d4e68c14ea99e54.mockapi.io/cart', obj);
      setCartItems((prev) =>
        prev.map((item) => {
          return {
            ...item,
            id: data.id,
          };
        })
      );
    } catch (error) {
      alert('Error');
    }
  };

  const removeFromCart = (title) => {
    let id;
    for (let item = 0; item < cartItems.length; item++) {
      if (title === cartItems[item].title) {
        id = cartItems[item].id;
      }
    }

    axios.delete(`https://63d359f28d4e68c14ea99e54.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.title !== title));
  };

  const isItemAdded = (title) => {
    return cartItems.some((obj) => obj.title === title);
  };

  return (
    <AppContext.Provider
      value={{
        isItemAdded,
        onAddToCart,
        removeFromCart,
        onAddToFavorite,
        removeFromFavorite,
        setCartOpened,
        setCartItems,
        cartItems,
        orderItems,
        setOrderItems,
      }}>
      <div className='wrapper clear'>
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} isOpened={cartOpened} />
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path='favorite' element={<Favorite items={favoriteItems} />} />
          <Route
            path=''
            element={
              <Home
                sneakers={sneakers}
                cartItems={cartItems}
                favoriteItems={favoriteItems}
                loading={isLoading}
              />
            }
          />
          <Route path='orders' element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
