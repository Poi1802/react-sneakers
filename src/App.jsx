import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: "none" }} className="overlay">
        <Drawer />
      </div>

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
