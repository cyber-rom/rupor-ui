import React from 'react';

import {
  BtnWrapper, IconWrapper, TitleWrapper, IconContainer,
} from './ShowMoreBtn.style';

import { ShowMoreBtnProps } from './ShowMoreBtn.types';

export const ShowMoreBtn = ({
  children, onClick, className, collapsed, icon,
}: ShowMoreBtnProps) => (
  <BtnWrapper className={className}>
    <IconContainer
      collapsed={collapsed}
      onClick={onClick}
    >
      <IconWrapper>{icon}</IconWrapper>
    </IconContainer>
    {!collapsed && <TitleWrapper onClick={onClick}>{children}</TitleWrapper>}
  </BtnWrapper>
);
