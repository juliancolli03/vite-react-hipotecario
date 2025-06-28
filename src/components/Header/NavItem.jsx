import React from 'react';
import { NavItemStyled, NavLinkStyled } from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChevronRight,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropdownMenu';

const NavItem = ({ item }) => (
  <NavItemStyled>
    <NavLinkStyled
      href="#"
      isButton={item.isButton}
      outlined={item.outlined}
    >
      {item.title}
      {item.icon === 'user' && <FontAwesomeIcon icon={faUser} />}
      {item.icon === 'chevron-right' && <FontAwesomeIcon icon={faChevronRight} />}
      {item.hasSubmenu && (
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ marginLeft: '0.25rem', fontSize: '0.8rem' }}
        />
      )}
    </NavLinkStyled>
    {item.hasSubmenu && <DropdownMenu submenu={item.submenu} />}
  </NavItemStyled>
);

export default NavItem;
