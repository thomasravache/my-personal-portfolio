import React from 'react';
import navigationLinks from '../data/navigation';
import { FaCode } from 'react-icons/fa';
import ThemeSwitch from './ThemeSwitch';
import navbarStyles from './tailwindStyles/navbarStyles';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import './tailwindStyles/styles.css';

const Navbar = ({ currentRoute, setCurrentRoute }) => {
  return (
    <nav className={ navbarStyles.navbar }>
      <span className={navbarStyles.logo}>
        <FaCode />
      </span>
      <ul className={navbarStyles.navItems}>
        {
          navigationLinks.map(({ name, id }) => (
            <li className={ navbarStyles.navItems } >
              <Link
              activeClass="activeItem"
              to={id}
              smooth={true}
              spy={true}
              duration={750}
              key={id}
              offset={0}
              className={ classNames([navbarStyles.navItem]) } // currentRoute === name && navbarStyles.selectedItem
              // onClick={ () => setCurrentRoute(name) }
              >
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;

