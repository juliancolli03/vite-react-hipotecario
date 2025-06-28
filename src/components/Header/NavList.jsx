import { NavListStyled } from './Header.styles';
import NavItem from './NavItem';

const NavList = ({ items, open }) => (
  <NavListStyled open={open}>
    {items.map((item, idx) => (
      <NavItem key={idx} item={item} />
    ))}
  </NavListStyled>
);

export default NavList;
