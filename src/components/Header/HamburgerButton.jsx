import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HamburgerButtonStyled } from './Header.styles';

const HamburgerButton = ({ open, toggle }) => (
  <HamburgerButtonStyled onClick={toggle}>
    <FontAwesomeIcon icon={open ? faTimes : faBars} />
  </HamburgerButtonStyled>
);

export default HamburgerButton;
