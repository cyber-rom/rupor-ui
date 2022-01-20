import React from 'react';

import { ButtonR, IconWrapper, ButtonContainer } from './Button.style';
import { ButtonProps } from './Button.types';

export const Button = ({
  color,
  size,
  backgroundColor,
  title,
  onClick,
  loaderIcon,
  isLoading,
  disabled,
  circle,
  theme,
  icon,
}: ButtonProps) => (
  <ButtonR
    backgroundColor={backgroundColor}
    size={size}
    color={color}
    theme={theme}
    onClick={onClick}
    disabled={disabled}
    circle={circle}
  >
    {isLoading ? loaderIcon : (
      <ButtonContainer>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        {title}
      </ButtonContainer>
    )}
  </ButtonR>
);
