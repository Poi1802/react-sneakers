import { Link } from "react-router-dom";

import Card from "../Card";

const Favorite = ({ items, removeFromFavorite }) => {
  return (
    <div className="content">
      <div className="contentHeader d-flex justify-between">
        <h1>
          <Link to={"/"}>
            <button>
              <img src="/img/favorite-arrow.svg" alt="" />
            </button>
          </Link>
          Мои закладки
        </h1>
      </div>
      <div className="cards d-flex flex-wrap">
        {items &&
          items.map((item) => (
            <Card
              key={`${item.title}_${item.index}`}
              {...item}
              isLiked={true}
              removeFromFavorite={(title) => removeFromFavorite(title)}
            />
          ))}
      </div>
    </div>
  );
};

export default Favorite;
