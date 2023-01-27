import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/img-1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 14999,
    imageUrl: "/img/sneakers/img-2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Suede",
    price: 8499,
    imageUrl: "/img/sneakers/img-3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/img-4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content__header d-flex justify-between">
          <h1>Все кроссовки</h1>
          <div className="searchBlock d-flex align-center">
            <img className="mr-10 ml-15" src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="cards d-flex flex-wrap">
          {arr.map((obj, index) => (
            <Card key={index} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
