import { NavItemStyled, NavLinkStyled } from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChevronRight,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropdownMenu';

const iconMap = {
  user: faUser,
  'chevron-right': faChevronRight
};

export default function NavItem({ item }) {
  const outlined = item.isButton && item.icon === 'chevron-right';

  return (
    <NavItemStyled>
      <NavLinkStyled
        href="#"
        isButton={item.isButton}
        hasSubmenu={item.hasSubmenu}
        outlined={outlined}
      >
        {item.title}
        {item.icon && (
          <FontAwesomeIcon
            icon={iconMap[item.icon]}
          />
        )}
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
}
