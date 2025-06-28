import { LogoLink } from './Header.styles';
import logoSrc from '/logos/brand-navbar.svg';

const Logo = () => (
  <LogoLink href="#">
    <img src={logoSrc} alt="Hipotecario Seguros" />
  </LogoLink>
);

export default Logo;
