const Card = () => {
  return (
    <div className="card d-flex flex-column align-center">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="heart" />
      </div>
      <img
        className="mt-20"
        width={133}
        height={112}
        src="/img/sneakers/img-1.jpg"
        alt="sneakers"
      />
      <p>
        Мужские Кроссовки <br /> Nike Blazer Mid Suede
      </p>
      <div className="cardBuy d-flex mb-30">
        <div className="price mr-40">
          <span>Цена:</span>
          <br />
          <b>12 999 руб.</b>
        </div>
        <button>
          <img width={11} height={11} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
