import React from 'react';

import {
  BtnWrapper, IconWrapper, TitleWrapper, IconContainer,
} from './ShowMoreBtn.style';

import { ShowMoreBtnProps } from './ShowMoreBtn.types';

export const ShowMoreBtn = ({
  children, onClick, className, collapsed, icon,
}: ShowMoreBtnProps) => (
  <BtnWrapper className={className} onClick={onClick}>
    <IconContainer
      collapsed={collapsed}
    >
      <IconWrapper>{icon}</IconWrapper>
    </IconContainer>
    {!collapsed && <TitleWrapper>{children}</TitleWrapper>}
  </BtnWrapper>
);
