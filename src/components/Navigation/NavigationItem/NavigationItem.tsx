import React from 'react';
import { NavigationItemProps } from './NavigationItem.props';
import { Link, TitleWrapper } from './NavigationItem.style';

export const NavigationItem = (props: NavigationItemProps) => {
  const { icon, title } = props;
  return (
    <Link {...props}>
      {icon}
      <TitleWrapper {...props}>{title}</TitleWrapper>
    </Link>
  );
};
