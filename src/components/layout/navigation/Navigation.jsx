import React, { useState } from "react";
import { Hamburger, NavigationItem, iconCart, avatar, logo } from "../../ExportComponents";
import './Navigation.scss';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" alt="personal logo" src={logo} />
          <Hamburger
            toggle={toggle}
            onToggleHamburgerMenu={toggleHamburgerMenu}
          />
        <ul className="links">
          {navItems.map((item, index) => (
            <NavigationItem
              key={index}
              onClick={() => setToggle(false)}
              href="#"
              className="link"
            >
              {item}
            </NavigationItem>
          ))}
        </ul>
        <div className="cart">
          <img src={iconCart} alt="" />
        </div>
        <div className="user">
          <img src={avatar} alt="" />
        </div>  
      </nav>
    </header>
  );
};

export default Navigation;
