import React from 'react';
import navigationLinks from '../data/navigation';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  return (
    <nav>
      <span>

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
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;

