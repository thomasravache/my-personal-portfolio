import React from 'react';
import navigationLinks from '../data/navigation';
import { FaCode } from 'react-icons/fa';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
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
            >
              {link}
            </li>
          ))
        }
      </ul>
      {/* <ThemeSwitch /> */}
    </nav>
  );
};

export default Navbar;

