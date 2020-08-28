import React from 'react';
import './App.css';
import Header from "Component/Header/Header";
import Menu from "Component/Menu/Menu";
import Footer from "Component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainWrap__list">
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
