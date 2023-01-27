const Header = ({ onClickCart }) => {
  return (
    <header className="d-flex justify-between p-45">
      <div className="headerLeft d-flex align-center">
        <img
          className="mr-15"
          width={40}
          height={40}
          src="/img/logo.png"
          alt="logo"
        />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="cu-p mr-30" onClick={onClickCart}>
          <img className="mr-10" src="/img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <img src="/img/favourite.svg" alt="" />
        </li>
        <li className="mr-20">
          <img width={20} height={20} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
