import React from 'react';
import navigationLinks from '../data/navigation';
import { FaCode } from 'react-icons/fa';
import ThemeSwitch from './ThemeSwitch';
import navbarStyles from './tailwindStyles/navbarStyles';
import classNames from 'classnames';

const Navbar = ({ currentRoute, setCurrentRoute }) => {
  return (
    <nav>
      <span>
        <FaCode />
      </span>
      <ul>
        {
          navigationLinks.map((link) => (
            <li
            key={link}
            className={ classNames([currentRoute === link && navbarStyles.selectedItem]) }
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

