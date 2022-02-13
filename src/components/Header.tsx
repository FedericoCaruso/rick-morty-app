import React from 'react';
import StyledHeader from '../styled_components/StyledHeader';
import { IHeaderProps } from '../models/HeaderProps';

function Header(props:IHeaderProps) {
  const { title, subtitle } = props;
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <em>{subtitle}</em>
    </StyledHeader>
  );
}

export default Header;
