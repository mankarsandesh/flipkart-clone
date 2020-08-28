import React from "react";
import "./App.css";
import Header from "Component/Header/Header";
import Menu from "Component/Menu/Menu";
import Footer from "Component/Footer/Footer";
import TopDeals from "Component/TopDeals/TopDeals";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainWrap__list">
        <Menu />
      </div>
      <div className="FlipKart__Wrapper">
        <TopDeals />
      </div>

      <Footer />
    </div>
  );
}

export default App;
