import React from "react";

import { card, favorite, button } from "./Card.module.scss";

const Card = ({
  title,
  price,
  imageUrl,
  onPlus,
  onAddToFavorite,
  removeFromFavorite,
  isLiked,
}) => {
  const [checked, setChecked] = React.useState(false);
  const [liked, setLiked] = React.useState(isLiked);

  const onClickPlus = () => {
    setChecked(!checked);
    if (checked === false) {
      onPlus({ title, price, imageUrl });
    }
  };

  const onClickHeart = () => {
    setLiked(!liked);

    if (liked === false) {
      onAddToFavorite({ title, price, imageUrl });
    } else {
      removeFromFavorite(title);
    }
  };

  return (
    <div className={card}>
      <div className={favorite}>
        <img
          onClick={onClickHeart}
          src={liked ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="heart"
        />
      </div>
      <img
        className="mt-20"
        width={133}
        height={112}
        src={imageUrl}
        alt="sneakers"
      />
      <p>{title}</p>
      <div className="cardBuy d-flex mb-30">
        <div className="price mr-40">
          <span>Цена:</span>
          <br />
          <b>{price} руб.</b>
        </div>
        <img
          className={button}
          onClick={onClickPlus}
          src={checked ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
