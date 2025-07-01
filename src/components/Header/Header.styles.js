import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: var(--color-white);
  z-index: var(--z-header);
  box-shadow: var(--shadow-sm);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-xl);
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
  font-size: var(--font-size-2xl);

  @media (max-width: 768px) {
    display: block;
    color: var(--color-text-light);
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
    background: var(--color-white);
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacing-md) var(--spacing-xl);
    display: ${({ open }) => (open ? 'flex' : 'none')};
    box-shadow: var(--shadow-md);
  }
`;

export const NavItemStyled = styled.li`
  position: relative;
  margin-right: var(--spacing-lg);

  @media (max-width: 768px) {
    margin: var(--spacing-sm) 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover > ul {
    display: flex;
  }
`;

export const NavLinkStyled = styled.a.withConfig({
  shouldForwardProp: prop =>
    !['hasSubmenu', 'isButton', 'outlined'].includes(prop)
})`
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-size: var(--font-size-base);
  text-decoration: none;
  cursor: pointer;
  transition: opacity var(--transition-fast);

  ${({ hasSubmenu, isButton, outlined }) => {
    if (hasSubmenu) {
      return `
        font-weight: var(--font-weight-semibold);
        color: var(--color-white);
        background: var(--color-primary);
        padding: 1.9rem var(--spacing-sm);
        border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
      `;
    }
    if (isButton) {
      const bg = outlined ? 'transparent' : 'var(--color-primary)';
      const color = outlined ? 'var(--color-primary)' : 'var(--color-white)';
      const border = outlined ? '2px solid var(--color-primary)' : 'none';
      return `
        font-weight: var(--font-weight-semibold);
        color: ${color};
        background: ${bg};
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: var(--border-radius-full);
        border: ${border};
      `;
    }
    return `
      font-weight: var(--font-weight-normal);
      color: var(--color-text-light);
      background: transparent;
      padding: 0;
    `;
  }}

  &:hover {
    opacity: 0.85;
  }

  svg {
    margin-left: ${({ hasSubmenu, isButton }) =>
      hasSubmenu || isButton ? 'var(--spacing-sm)' : 'var(--spacing-xs)'};
  }
`;

export const DropdownMenuStyled = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  flex-direction: column;
  background: var(--color-primary);
  border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
  padding: var(--spacing-md) 0;
  box-shadow: var(--shadow-md);
  min-width: 200px;
  z-index: var(--z-dropdown);
`;

export const DropdownArrow = styled.div`
  position: absolute;
  top: -10px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--color-primary);
`;

export const SubmenuItem = styled.li`
  list-style: none;
  padding: var(--spacing-sm) var(--spacing-lg);

  a {
    color: var(--color-white);
    text-decoration: none;
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;