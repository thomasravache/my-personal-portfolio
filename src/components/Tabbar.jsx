import React, { useCallback } from 'react';
import navigationLinks from '../data/navigation';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { GoProject } from 'react-icons/go';
import { TiContacts } from 'react-icons/ti';
import classNames from 'classnames';
import tabbarStyles from './tailwindStyles/tabbarStyles';
import ThemeSwitch from './ThemeSwitch';
import { Link } from 'react-scroll';
import './tailwindStyles/styles.css';

const Tabbar = ({ currentRoute, setCurrentRoute }) => {
  const getTabIcon = useCallback((linkItem) => {
    switch(linkItem) {
      case 'Home':
        return <AiFillHome />;
      case 'Sobre mim':
        return <BsFillInfoCircleFill />;
      case 'Skills':
        return <GiSkills />;
      case 'Projetos':
        return <GoProject />;
      case 'Contato':
        return <TiContacts />;
      default:
        return console.log('nenhum case foi selecionado');
    }
  }, [])
  return (
    <nav className={ tabbarStyles.tabbar }>
      {
        navigationLinks.map(({ name, id }) => (
          <Link
            activeClass="active"
            to={id}
            smooth={true}
            spy={true}
            duration={750}
            key={id}
            offset={0}
            className={classNames([tabbarStyles.tabItem])} // currentRoute === name && 'selectedItem'
            // onClick={() => setCurrentRoute(name)}
          >
            <span className={ tabbarStyles.icon }>
              {getTabIcon(name)}
            </span>
          </Link>
        ))
      }
      <div className={ tabbarStyles.toggleThemeContainer }>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Tabbar;
