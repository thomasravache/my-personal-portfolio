import React from 'react';
import navigationLinks from '../data/navigation';
import { FaCode } from 'react-icons/fa';
import ThemeSwitch from './ThemeSwitch';
import navbarStyles from './tailwindStyles/navbarStyles';
import classNames from 'classnames';

const Navbar = ({ currentRoute, setCurrentRoute }) => {
  return (
    <nav className={ navbarStyles.navbar }>
      <span className={navbarStyles.logo}>
        <FaCode />
      </span>
      <ul className={navbarStyles.navItems}>
        {
          navigationLinks.map((link) => (
            <li
            key={link}
            className={ classNames([navbarStyles.navItem, currentRoute === link && navbarStyles.selectedItem]) }
            onClick={ () => setCurrentRoute(link) }
            >
              {link}
            </li>
          ))
        }
      </ul>
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;

