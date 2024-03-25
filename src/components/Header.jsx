// components/Header.js
import "./Header.css"
import React from 'react';

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="header__logo">
        <h1 className="text-2xl font-bold">ECOMMERCE</h1>
      </div>
      <nav className="header__nav">
        <span className="cursor-pointer">Categories</span>
        <span className="cursor-pointer">Sale</span>
        <span className="cursor-pointer">Clearance</span>
        <span className="cursor-pointer">New Stock</span>
        <span className="cursor-pointer">Trending</span>
      </nav>
      <div className="header__images">
        <img src={require('../Images/magnifying-glass-2935435_640.png')} alt="error" height="30px" width="30px" />
        <img src={require('../Images/shopping-cart-307772_640.png')} alt="error" height="25px" width="30px" />
      </div>
    </header>
    <div className="add">
  <h3>&lt;  Get 10% off on business signup &gt;</h3>
</div>


    </>
  
  );
};

export default Header;
