import React, { useEffect, useState } from 'react';
import {
  Hamburger,
  NavigationItem,
  iconCart,
  avatar,
  logo,
  iconMenu,
  iconClose,
} from '../../ExportComponents';
import './Navigation.scss';

const Navigation = () => {
  const [toggle, setToggle] = useState(true);
  const [menuImg, setMenuImg] = useState(iconMenu);

  //runs this snippet everytime the toggle state changes
  useEffect(() => {
    if (toggle) {
      setMenuImg(iconClose);
    } else {
      setMenuImg(iconMenu);
    }
  }, [toggle]);

  const toggleMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  const navigationClasses = toggle ? 'nav show' : 'nav';

  return (
    <header className="header">
      <Hamburger menuImg={menuImg} onToggleMenu={toggleMenu} toggle={toggle} />
      <a href="#" className="logo">
        <img className="logo" alt="personal logo" src={logo} />
      </a>

      {/* This is our menu with the links */}
      <nav className={navigationClasses} aria-labelledby="btn-menu">
        <ul className="links">
          {navItems.map((item, index) => (
            <NavigationItem
              key={index}
              onClick={toggleMenu}
              href="#"
              //Removed the classname property since you have hardcoded it as 'link' and added it directly to the ankerlink
              // className="link"
            >
              {item}
            </NavigationItem>
          ))}
        </ul>
      </nav>

      <div className="cart">
        <img src={iconCart} alt="cart" />
      </div>
      <div className="user">
        <img src={avatar} alt="user" />
      </div>
    </header>
  );
};

export default Navigation;
