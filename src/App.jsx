import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Favorite from "./components/Favorite";
import Header from "./components/Header";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [sneakers, setSneakers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://63d359f28d4e68c14ea99e54.mockapi.io/items")
      .then(({ data }) => {
        setSneakers(data);
      });
  }, []);
  React.useEffect(() => {
    axios
      .get("https://63d359f28d4e68c14ea99e54.mockapi.io/cart")
      .then(({ data }) => {
        setCartItems(data);
      });
  }, [cartOpened]);

  const onAddToCart = (obj) => {
    axios.post("https://63d359f28d4e68c14ea99e54.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorite = (obj) => {
    console.log(favoriteItems);
    setFavoriteItems((prev) => [...prev, obj]);
  };

  const removeFromFavorite = (title) => {
    setFavoriteItems((prev) => prev.filter((item) => item.title !== title));
  };

  const removeFromCart = (id) => {
    axios.delete(`https://63d359f28d4e68c14ea99e54.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          removeItem={(id) => removeFromCart(id)}
          onClose={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/favorite"
          element={
            <Favorite
              items={favoriteItems}
              removeFromFavorite={(title) => removeFromFavorite(title)}
            />
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/"
          element={
            <div className="content">
              <div className="contentHeader d-flex justify-between">
                <h1>
                  {searchValue ? `Поиск по: "${searchValue}"` : "Все кроссовки"}
                </h1>
                <div className="searchBlock d-flex align-center">
                  <img
                    className="mr-10 ml-15"
                    src="/img/search.svg"
                    alt="search"
                  />
                  {searchValue && (
                    <img
                      onClick={() => setSearchValue("")}
                      className="removeBtn"
                      src="/img/delete-cart.svg"
                      alt="Delete"
                    />
                  )}
                  <input
                    onChange={onChangeSearchInput}
                    value={searchValue}
                    type="text"
                    placeholder="Поиск..."
                  />
                </div>
              </div>
              <div className="cards d-flex flex-wrap">
                {sneakers &&
                  sneakers
                    .filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .map((items) => (
                      <Card
                        key={items.title}
                        {...items}
                        onCheck={(id) => removeFromCart(id)}
                        onPlus={(obj) => onAddToCart(obj)}
                        onAddToFavorite={(obj) => onAddToFavorite(obj)}
                        removeFromFavorite={(title) =>
                          removeFromFavorite(title)
                        }
                        isLiked={false}
                      />
                    ))}
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
