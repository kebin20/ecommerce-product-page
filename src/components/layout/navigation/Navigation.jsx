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
  const [toggle, setToggle] = useState(false);
  const [menuImg, setMenuImg] = useState(iconMenu);

  // runs this snippet everytime the toggle state changes
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
  const linksClasses = toggle ? 'links show' : 'links';

  return (
    <header className="header">
      <nav className="nav">
        <Hamburger
          menuImg={menuImg}
          onToggleMenu={toggleMenu}
          toggle={toggle}
        />
        <a href="#" className="logo">
          <img className="logo" alt="personal logo" src={logo} />
        </a>

        <ul className={linksClasses} id="navigationLinks">
          {navItems.map((item, index) => (
            <NavigationItem
              key={index}
              onClick={toggleMenu}
              href="#"
            >
              {item}
            </NavigationItem>
          ))}
        </ul>

        <div className="cart">
          <img src={iconCart} alt="cart" />
        </div>
        <div className="user">
          <img src={avatar} alt="user" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
