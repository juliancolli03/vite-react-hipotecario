import { useState } from 'react';
import { HeaderWrapper, Nav } from './Header.styles';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';
import NavList from './NavList';
import { headerData } from '../../data/header';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <div className="container">
        <Nav>
          <Logo />
          <HamburgerButton open={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
          <NavList items={headerData} open={menuOpen} />
        </Nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
