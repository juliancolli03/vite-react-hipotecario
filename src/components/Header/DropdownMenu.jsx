import React from 'react';
import { DropdownMenuStyled, DropdownArrow, SubmenuItem } from './Header.styles';

const DropdownMenu = ({ submenu }) => (
  <DropdownMenuStyled>
    <DropdownArrow />
    {submenu.map((sub, i) => (
      <SubmenuItem key={i}>
        <a href="#">{sub.title}</a>
      </SubmenuItem>
    ))}
  </DropdownMenuStyled>
);

export default DropdownMenu;
