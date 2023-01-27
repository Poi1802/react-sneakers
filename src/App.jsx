import axios from "axios";
import React from "react";

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [sneakers, setSneakers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://63d359f28d4e68c14ea99e54.mockapi.io/items")
      .then(({ data }) => {
        setSneakers(data);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };
  const deleteItems = ({ title }) => {
    setCartItems(cartItems.filter((obj) => obj.title !== title));
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          removeItem={(title) => deleteItems(title)}
          onClose={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__header d-flex justify-between">
          <h1>Все кроссовки</h1>
          <div className="searchBlock d-flex align-center">
            <img className="mr-10 ml-15" src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards d-flex flex-wrap">
          {sneakers &&
            sneakers.map((items, index) => (
              <Card
                key={index}
                {...items}
                onPlus={(obj) => onAddToCart(obj)}
                onCheck={(title) => deleteItems(title)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
