import React from "react";
import "./App.css";
import Header from "Component/Header/Header";
import Menu from "Component/Menu/Menu";
import Footer from "Component/Footer/Footer";
import TopDeals from "Component/TopDeals/TopDeals";
import Promotion from "Component/Promotion/Promotion";

import ProductList from "Component/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainWrap__list">
        <Menu />
      </div>
      <div className="FlipKart__Wrapper">
        <TopDeals />
        <Promotion />
        <ProductList
          title="Top Rated Application For You"
          desc="Show Now"
          type="topRated"
        />
        <ProductList
          title="Headphones & Speakers"
          desc="Show Now"
          type="headPhone"
        />
        <Promotion />
        <ProductList
          title="Best Battery Phones"
          desc="More than 4000mAh"
          type="headPhone"
        />
        <ProductList
          title="Selfie camera Phones"
          desc="20MP or More Front Camera"
          type="headPhone"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
