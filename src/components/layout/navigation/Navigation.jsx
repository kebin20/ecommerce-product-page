import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { Hamburger, NavigationItem, iconCart, avatar } from "../../ExportComponents";

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
        <ul className="links">
          <Hamburger
            toggle={toggle}
            onToggleHamburgerMenu={toggleHamburgerMenu}
          />
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
          <div className="cart">{iconCart}</div>
          <div className="user">{avatar}</div> 
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
