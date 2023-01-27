import React from "react";

import Card from "./CartCard";

import {
  overlay,
  drawer,
  cartItems,
  removeBtn,
  cartTotalBlock,
  greenButton,
} from "./Drawer.module.scss";

const Drawer = ({ onClose, items, removeItem }) => {
  return (
    <div className={overlay}>
      <div className={drawer}>
        <h2 className="d-flex justify-between mr-30">
          Корзина{" "}
          <img
            className={removeBtn}
            onClick={onClose}
            src="/img/delete-cart.svg"
            alt="Delete"
          />
        </h2>
        <div className={cartItems}>
          {items &&
            items.map((obj) => (
              <Card
                key={obj.title}
                {...obj}
                remove={(title) => removeItem(title)}
              />
            ))}
        </div>
        <div className={cartTotalBlock}>
          <ul>
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
          <button className={greenButton}>
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
    </div>
  );
};

export default Drawer;
