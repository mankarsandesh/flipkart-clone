import React from 'react';
import './App.css';
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
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
