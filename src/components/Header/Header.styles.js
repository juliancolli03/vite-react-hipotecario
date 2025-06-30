import styled from 'styled-components';

const colors = {
  primary: '#00B2D4',
  text: '#555555'
};

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 80px;
`;

export const LogoLink = styled.a`
  display: inline-block;
  img {
    height: 40px;
  }
`;

export const HamburgerButtonStyled = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    color: ${colors.text};
  }
`;

export const NavListStyled = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const NavItemStyled = styled.li`
  position: relative;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover > ul {
    display: flex;
  }
`;

export const NavLinkStyled = styled.a.withConfig({
  shouldForwardProp: prop => !['isButton', 'outlined'].includes(prop)
})`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: ${({ isButton }) => (isButton ? '600' : '500')};
  color: ${({ isButton, outlined }) =>
    isButton ? (outlined ? colors.primary : '#fff') : colors.text};
  background: ${({ isButton }) => (isButton ? colors.primary : 'transparent')};
  padding: ${({ isButton }) => (isButton ? '0.5rem 1rem' : '0')};
  border-radius: ${({ isButton }) => (isButton ? '50px' : '0')};
  border: ${({ outlined }) =>
    outlined ? `2px solid ${colors.primary}` : 'none'};
  font-size: 0.95rem;
  cursor: pointer;

  svg {
    margin-left: ${({ isButton }) => (isButton ? '0.5rem' : '0.25rem')};
  }
`;

export const DropdownMenuStyled = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  flex-direction: column;
  background: ${colors.primary};
  border-radius: 0 0 8px 8px;
  padding: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 5;
`;

export const DropdownArrow = styled.div`
  position: absolute;
  top: -10px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${colors.primary};
`;

export const SubmenuItem = styled.li`
  list-style: none;
  padding: 0.5rem 1.5rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
