import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import Hamburger from "./Hamburger";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  function toggleHamburgerMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" alt="personal logo" src={logo} />
        <ul className="links">
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Collections
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Men
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Women
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setToggle(false)} href="#" className="link">
              Contact
            </a>
          </li>
        </ul>

        <Hamburger
          toggle={toggle}
          onToggleHamburgerMenu={toggleHamburgerMenu}
        />
      </nav>

      {toggle && (
        <ul className="mobile-links">
          <NavigationItem
            onClick={() => setToggle(false)}
            href="#"
            className="mobile-link"
          >
            Collections
          </NavigationItem>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className="mobile-link"
            >
              Men
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className="mobile-link"
            >
              Women
            </a>
          </li>
          <li>
            <a
              onClick={() => setToggle(false)}
              href="#"
              className="mobile-link"
            >
              About
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navigation;
