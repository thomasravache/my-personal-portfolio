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
    <nav>
      {
        navigationLinks.map((linkItem) => (
          <span
            key={linkItem}
            className={classNames([linkItem === currentRoute && tabbarStyles.selectedItem])}
            onClick={ () => setCurrentRoute(linkItem) }
          >
            {getTabIcon(linkItem)}
          </span>
        ))
      }
      <div>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Tabbar;
