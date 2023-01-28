import React from "react";
import axios from "axios";

import Card from "../Card";

const Home = ({
  sneakers,
  onAddToFavorite,
  removeFromCart,
  onAddToCart,
  removeFromFavorite,
}) => {
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="content">
      <div className="contentHeader d-flex justify-between">
        <h1>{searchValue ? `Поиск по: "${searchValue}"` : "Все кроссовки"}</h1>
        <div className="searchBlock d-flex align-center">
          <img className="mr-10 ml-15" src="/img/search.svg" alt="search" />
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
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((items) => (
              <Card
                key={items.title}
                {...items}
                onCheck={(id) => removeFromCart(id)}
                onPlus={(obj) => onAddToCart(obj)}
                onAddToFavorite={(obj) => onAddToFavorite(obj)}
                removeFromFavorite={(title) => removeFromFavorite(title)}
                isLiked={false}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
