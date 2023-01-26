const Drawer = () => {
  return (
    <div className="drawer">
      <h2 className="d-flex justify-between mr-30">
        Корзина{" "}
        <img
          className="removeBtn cu-p"
          src="/img/delete-cart.svg"
          alt="Delete"
        />
      </h2>
      <div className="items">
        <div className="card d-flex align-center pt-20 pb-20 mb-20">
          <img
            className="ml-20 pb-10"
            width={70}
            height={70}
            src="/img/sneakers/img-1.jpg"
            alt="Sneakers"
          />
          <div className="mr-10 ml-20">
            <p>
              Мужские Кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/delete-cart.svg" alt="Delete" />
        </div>
        <div className="card d-flex align-center pt-20 pb-20 mb-20">
          <img
            className="ml-20 pb-10"
            width={70}
            height={70}
            src="/img/sneakers/img-2.jpg"
            alt="Sneakers"
          />
          <div className="mr-10 ml-20">
            <p>
              Мужские Кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/delete-cart.svg" alt="Delete" />
        </div>
        <div className="card d-flex align-center pt-20 pb-20 mb-20">
          <img
            className="ml-20 pb-10"
            width={70}
            height={70}
            src="/img/sneakers/img-1.jpg"
            alt="Sneakers"
          />
          <div className="mr-10 ml-20">
            <p>
              Мужские Кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/delete-cart.svg" alt="Delete" />
        </div>
        <div className="card d-flex align-center pt-20 pb-20 mb-20">
          <img
            className="ml-20 pb-10"
            width={70}
            height={70}
            src="/img/sneakers/img-2.jpg"
            alt="Sneakers"
          />
          <div className="mr-10 ml-20">
            <p>
              Мужские Кроссовки <br /> Nike Blazer Mid Suede
            </p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/delete-cart.svg" alt="Delete" />
        </div>
      </div>
      <div className="cartTotalBlock mr-30 ml-30">
        <ul className="">
          <li className="mb-20">
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="greenButton">
          <span>Оформить заказ</span>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H14.7143"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.71436 1L14.7144 7L8.71436 13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Drawer;
